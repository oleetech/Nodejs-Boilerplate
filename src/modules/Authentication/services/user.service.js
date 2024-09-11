const sendEmail = require('../utils/sendEmail');
const sendSms = require('../utils/sendSms');
const { AppDataSource } = require('../../../index'); // Import AppDataSource
const User = require('../entities/user.entity');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


/**
 * Hashes a password.
 * @param {string} password - The plain text password.
 * @returns {Promise<string>} - The hashed password.
 */
const hashPassword = async (password) => {
    return await bcrypt.hash(password, 10);
};

/**
 * Compares a plain text password with a hashed password.
 * @param {string} inputPassword - The plain text password.
 * @param {string} storedPasswordHash - The hashed password.
 * @returns {Promise<boolean>} - Whether the passwords match.
 */
const comparePassword = async (inputPassword, storedPasswordHash) => {
    return await bcrypt.compare(inputPassword, storedPasswordHash);
};


// Callback for registration
const registrationCallback = async (user) => {
    user.isActivated = true;
    await user.save(); // Save user with updated status
    return { status: 200, message: 'অ্যাকাউন্ট সফলভাবে সক্রিয় করা হয়েছে' };
};

// Callback for login
const loginCallback = async (user) => {
    const token = generateToken(user); // Define or import `generateToken` function
    return { status: 200, message: 'লগইন সফল', token };
};

// Callback for password reset
const resetPasswordCallback = async (user, newPassword) => {
    user.password = await hashPassword(newPassword); // Define or import `hashPassword` function
    await user.save();
    return { status: 200, message: 'পাসওয়ার্ড সফলভাবে রিসেট করা হয়েছে' };
};

/**
 * Generates a random 6-digit OTP.
 * @returns {string} - The generated OTP.
 */
const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();  // Random 6-digit OTP
};


/**
 * Verifies OTP for a given contact (email, phone, or username) and performs a callback action.
 * @param {string} contact - The email, phone number, or username of the user.
 * @param {string} otp - The OTP to verify.
 * @param {Function} callback - The callback function to execute after OTP verification.
 * @returns {Promise<object>} - The result of the OTP verification and callback action.
 */
const verifyOtp = async (contact, otp, callback) => {
    try {
        const userRepository = AppDataSource.getRepository(User);

        let query = {};
        
        // Determine if contact is an email, phone number, or username
        if (contact.includes('@')) {
            query = { email: contact };
        } else if (/^\+?\d{10,15}$/.test(contact)) {
            query = { phone: contact };
        } else {
            query = { username: contact };
        }

        // Find the user by email, phone, or username
        const user = await userRepository.findOne({ where: query });
        if (!user) {
            return { status: 400, message: 'ব্যবহারকারী পাওয়া যায়নি' };
        }

        // OTP verification
        if (user.otp !== otp) {
            return { status: 400, message: 'অবৈধ OTP' };
        }

        // Execute callback function if OTP is valid
        const result = await callback(user);

        // Clear OTP field after successful verification
        user.otp = null;
        await userRepository.save(user);

        return result;
    } catch (err) {
        return { status: 500, message: 'OTP যাচাই করার সময় ত্রুটি', error: err.message };
    }
};


/**
 * Verifies and decodes the JWT token.
 * @param {string} token - The JWT token to verify.
 * @returns {object} - Decoded token information if verification is successful.
 * @throws {Error} - Throws an error if the token is invalid or expired.
 */
const verifyToken = async (token) => {
    const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';  // JWT secret key from environment

    try {
        // Verifying the token and returning the decoded data
        const decoded = jwt.verify(token, JWT_SECRET);
        return decoded;
    } catch (err) {
        // Throwing an error if token verification fails
        throw new Error('Invalid or expired token');
    }
};
/**
 * Sends OTP via SMS.
 * @param {string} phone - The phone number to send OTP to.
 * @param {string} otp - The OTP to send.
 */
const sendPhoneOtp = async (phone, otp) => {
    await sendSms(phone, `Your OTP is ${otp}.`);
};

/**
 * Sends OTP via email.
 * @param {string} userEmail - The email address to send OTP to.
 * @returns {Promise<string>} - The generated OTP.
 */
const sendOtpEmail = async (userEmail) => {
    const otp = generateOtp();

    const emailOptions = {
        to: userEmail,
        subject: 'Your OTP Code',
        text: `Your One-Time Password (OTP) is: ${otp}. It will expire in 10 minutes.`,
    };

    try {
        await sendEmail(emailOptions);
        console.log(`OTP sent to ${userEmail}: ${otp}`);
    } catch (error) {
        console.error('Error sending OTP email:', error);
    }

    return otp;
};

const createNewUser = (username, email, hashedPassword, phone) => {
    return {
        username,
        email,
        password: hashedPassword,
        phone: phone || null,
        isActivated: false
    };
};

const saveUser = async (user) => {
    try {
        const userRepository = AppDataSource.getRepository(User); 
        await userRepository.save(user);
    } catch (error) {
        throw new Error(`Failed to save user: ${error.message}`);
    }
};


/**
 * Handles email registration and sends OTP or activation link.
 * @param {User} newUser - The new user entity.
 * @returns {Promise<object>} - The response object indicating success or failure.
 */
const handleEmailRegistration = async (newUser) => {
    if (process.env.EMAIL_VERIFICATION_ENABLED === 'true') {
        if (process.env.OTP_VERIFICATION_ENABLED === 'true') {
            const otp = generateOtp();
            newUser.otp = otp;
            await saveUser(newUser);

            try {
                await sendOtpEmail(newUser.email);
                return { success: true, message: 'User successfully registered. OTP has been sent, please verify.' };
            } catch (emailError) {
                return { success: false, message: 'User registered, but failed to send OTP email.', error: emailError.message };
            }
        } else {
            const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            const activationLink = `${process.env.EMAIL_VERIFY_ACTIVATION_LINK}/${token}`;

            try {
                await sendEmail({
                    to: newUser.email,
                    subject: 'Account Activation',
                    text: `Please click the following link to activate your account: ${activationLink}`,
                });
                return { success: true, message: 'User successfully registered. Activation email has been sent.' };
            } catch (emailError) {
                return { success: false, message: 'User registered, but failed to send activation email.', error: emailError.message };
            }
        }
    } else {
        newUser.isActivated = true;
        await saveUser(newUser);
        return { success: true, message: 'User successfully registered. No email verification required.' };
    }
};

/**
 * Handles phone registration and sends OTP.
 * @param {User} newUser - The new user entity.
 * @param {string} phone - The phone number to send OTP.
 * @returns {Promise<object>} - The response object indicating success or failure.
 */
const handlePhoneRegistration = async (newUser, phone) => {
    if (process.env.PHONE_VERIFICATION_ENABLED === 'true') {
        const otp = generateOtp();
        newUser.otp = otp;
        await saveUser(newUser);

        await sendPhoneOtp(phone, otp);
        return { success: true, message: 'User successfully registered. OTP has been sent to your phone.' };
    } else {
        newUser.isActivated = true;
        await saveUser(newUser);
        return { success: true, message: 'User successfully registered. No phone verification required.' };
    }
};

/**
 * Handles login via phone number.
 * @param {string} phone - The phone number.
 * @returns {Promise<object>} - The login response with OTP or token.
 */
const phoneLogin = async (phone) => {
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOne({ where: { phone } });

    if (!user) {
        throw new Error('User not found or not activated.');
    }

    if (process.env.PHONE_VERIFICATION_ENABLED === 'true') {
        const otp = generateOtp();
        const otpExpiration = new Date(Date.now() + 10 * 60000); // 10 minutes from now

        user.otp = otp;
        user.otp_expiration = otpExpiration;

        await userRepository.save(user);

        await sendPhoneOtp(phone, otp);
        return { message: 'OTP sent to your phone.' };
    } else {
        const token = generateToken(user);
        return { token };
    }
};

/**
 * Handles login via email.
 * @param {string} email - The email address.
 * @param {string} password - The password.
 * @returns {Promise<object>} - The login response with token.
 */
const emailLogin = async (email, password) => {
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOne({ where: { email } });

    if (!user) {
        throw new Error('User not found or not activated.');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Invalid password.');
    }

    if (process.env.EMAIL_VERIFICATION_ENABLED === 'true' && !user.isActivated) {
        throw new Error('Please activate your account via email.');
    }

    const token = generateToken(user);
    return { token };
};

/**
 * Handles login via username.
 * @param {string} username - The username.
 * @param {string} password - The password.
 * @returns {Promise<object>} - The login response with token.
 */
const usernameLogin = async (username, password) => {
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOne({ where: { username } });

    if (!user) {
        throw new Error('User not found or not activated.');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Invalid password.');
    }

    if (process.env.EMAIL_VERIFICATION_ENABLED === 'true' && !user.isActivated) {
        throw new Error('Please activate your account via email.');
    }

    const token = generateToken(user);
    return { token };
};

/**
 * Logs in a user based on identifier and password.
 * @param {string} identifier - The identifier (email, username, or phone).
 * @param {string} password - The password.
 * @returns {Promise<object>} - The login response.
 */
const login = async (identifier, password) => {
    const phoneRegex = /^\+?\d{10,15}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (phoneRegex.test(identifier)) {
        return await phoneLogin(identifier);
    } else if (emailRegex.test(identifier)) {
        return await emailLogin(identifier, password);
    } else {
        return await usernameLogin(identifier, password);
    }
};

/**
 * Resets a user's password.
 * @param {User} user - The user entity.
 * @param {string} newPassword - The new password.
 * @returns {Promise<User>} - The updated user entity.
 */
const resetPassword = async (user, newPassword) => {
    user.password = await hashPassword(newPassword);
    return await saveUser(user);
};

/**
 * Activates a user's account.
 * @param {User} user - The user entity.
 * @returns {Promise<User>} - The updated user entity.
 */
const activateUserAccount = async (user) => {
    user.isActivated = true;
    return await saveUser(user);
};

/**
 * Deactivates a user's account.
 * @param {User} user - The user entity.
 * @returns {Promise<User>} - The updated user entity.
 */
const deactivateUserAccount = async (user) => {
    user.isActivated = false;
    return await saveUser(user);
};


/**
 * Checks if the user has reached the login attempts limit.
 * @param {User} user - The user entity.
 * @returns {Promise<User>} - The updated user entity if locked.
 */
const loginAttemptsLimit = async (user) => {
    if (user.loginAttempts >= 5) {
        user.isLocked = true;
        return await saveUser(user);
    }
};

/**
 * Updates the user profile with new details.
 * @param {User} user - The user entity.
 * @param {object} updates - The updates to apply.
 * @returns {Promise<User>} - The updated user entity.
 */
const updateUserProfile = async (user, updates) => {
    Object.assign(user, updates);
    return await saveUser(user);
};

/**
 * Finds a user by ID.
 * @param {string} id - The user ID.
 * @returns {Promise<User>} - The found user entity.
 */
const findUserById = async (id) => {
    const userRepository = AppDataSource.getRepository(User);
    return await userRepository.findOneBy({ id });
};


/**
 * Finds a user by email.
 * @param {string} email - The email address.
 * @returns {Promise<User>} - The found user entity.
 */
const findUserByEmail = async (email) => {
    const userRepository = AppDataSource.getRepository(User);
    return await userRepository.findOneBy({ email });
};

/**
 * Finds a user by phone number.
 * @param {string} phone - The phone number.
 * @returns {Promise<User>} - The found user entity.
 */
const findUserByPhone = async (phone) => {
    const userRepository = AppDataSource.getRepository(User);
    return await userRepository.findOneBy({ phone });
};

/**
 * Checks if a user with the specified username, email, or phone exists.
 * @param {string} username - The username.
 * @param {string} email - The email address.
 * @param {string} phone - The phone number.
 * @returns {Promise<User>} - The found user entity or null.
 */
const checkIfUserExists = async (username, email, phone) => {
    const userRepository = AppDataSource.getRepository(User);
    return await userRepository.findOne({
        where: [
            { username },
            { email },
            { phone }
        ]
    });
};


/**
 * Generates a JWT token for a user.
 * @param {User} user - The user entity.
 * @returns {string} - The generated JWT token.
 */
const generateToken = (user) => {
    return jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );
};

module.exports = {
    hashPassword,
    comparePassword,
    createNewUser,
    saveUser,
    handleEmailRegistration,
    handlePhoneRegistration,
    resetPassword,
    activateUserAccount,
    deactivateUserAccount,
    loginAttemptsLimit,
    updateUserProfile,
    findUserById,
    findUserByEmail,
    findUserByPhone,
    checkIfUserExists,
    phoneLogin ,
    emailLogin ,
    usernameLogin,
    login,
    verifyToken,
    registrationCallback,
    loginCallback,
    resetPasswordCallback,
    verifyOtp,

};
