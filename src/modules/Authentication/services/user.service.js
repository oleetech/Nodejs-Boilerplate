const sendEmail = require('../utils/sendEmail');
const sendSms = require('../utils/sendSms');
const { AppDataSource } = require('../../../index'); // Import AppDataSource
const User = require('../entities/user.entity');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

/**
 * Generates a random 6-digit OTP.
 * @returns {string} - The generated OTP.
 */
const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();  // Random 6-digit OTP
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
 * Handles user login.
 * @param {string} identifier - The email, username, or phone number.
 * @param {string} password - The password.
 * @returns {Promise<string>} - The generated JWT token.
 */
const handleLogin = async (identifier, password) => {
    const userRepository = AppDataSource.getRepository(User);
    let user = await userRepository.findOne({
        where: [
            { email: identifier },
            { username: identifier },
            { phone: identifier }
        ]
    });

    if (!user || !await comparePassword(password, user.password)) {
        throw new Error('Invalid credentials');
    }

    if (!user.isActivated) {
        throw new Error('Account not activated');
    }

    return generateToken(user);
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
    handleLogin,
    loginAttemptsLimit,
    updateUserProfile,
    findUserById,
    findUserByEmail,
    checkIfUserExists
};
