const sendEmail = require('../utils/sendEmail');

// ____                                                      _     __  __                                                                     _   
// |  _ \    __ _   ___   ___  __      __   ___    _ __    __| |   |  \/  |   __ _   _ __     __ _    __ _    ___   _ __ ___     ___   _ __   | |_ 
// | |_) |  / _` | / __| / __| \ \ /\ / /  / _ \  | '__|  / _` |   | |\/| |  / _` | | '_ \   / _` |  / _` |  / _ \ | '_ ` _ \   / _ \ | '_ \  | __|
// |  __/  | (_| | \__ \ \__ \  \ V  V /  | (_) | | |    | (_| |   | |  | | | (_| | | | | | | (_| | | (_| | |  __/ | | | | | | |  __/ | | | | | |_ 
// |_|      \__,_| |___/ |___/   \_/\_/    \___/  |_|     \__,_|   |_|  |_|  \__,_| |_| |_|  \__,_|  \__, |  \___| |_| |_| |_|  \___| |_| |_|  \__|
//                                                                                                   |___/                                         

const bcrypt = require('bcryptjs');

const hashPassword = async (password) => {
    return await bcrypt.hash(password, 10);  // 10 salt rounds for hashing
};

const comparePassword = async (inputPassword, storedPasswordHash) => {
    return await bcrypt.compare(inputPassword, storedPasswordHash);
};


const resetPassword = async (user, newPassword, userRepository) => {
    user.password = await hashPassword(newPassword);
    return await userRepository.save(user);
};


 // _____           _                       __  __                                                                     _        __      _  __        __  _____  __  
// |_   _|   ___   | | __   ___   _ __     |  \/  |   __ _   _ __     __ _    __ _    ___   _ __ ___     ___   _ __   | |_     / /     | | \ \      / / |_   _| \ \ 
//   | |    / _ \  | |/ /  / _ \ | '_ \    | |\/| |  / _` | | '_ \   / _` |  / _` |  / _ \ | '_ ` _ \   / _ \ | '_ \  | __|   | |   _  | |  \ \ /\ / /    | |    | |
//   | |   | (_) | |   <  |  __/ | | | |   | |  | | | (_| | | | | | | (_| | | (_| | |  __/ | | | | | | |  __/ | | | | | |_    | |  | |_| |   \ V  V /     | |    | |
//   |_|    \___/  |_|\_\  \___| |_| |_|   |_|  |_|  \__,_| |_| |_|  \__,_|  \__, |  \___| |_| |_| |_|  \___| |_| |_|  \__|   | |   \___/     \_/\_/      |_|    | |
//                                                                           |___/                                             \_\                              /_/ 

const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    return jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );
};

const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
};





/*
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|A|c|c|o|u|n|t| |A|c|t|i|v|a|t|i|o|n|
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
*/


const activateUserAccount = async (user, userRepository) => {
    user.isActivated = true;
    return await userRepository.save(user);
};

const deactivateUserAccount = async (user, userRepository) => {
    user.isActivated = false;
    return await userRepository.save(user);
};


/*
+-+ +-+ +-+   +-+ +-+ +-+ +-+ +-+ +-+ +-+ +-+ +-+ +-+
|O| |T| |P|   |M| |a| |n| |a| |g| |e| |m| |e| |n| |t|
+-+ +-+ +-+   +-+ +-+ +-+ +-+ +-+ +-+ +-+ +-+ +-+ +-+
*/
const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();  // Random 6-digit OTP
};


const sendSms = require('../utils/sendSms');

const sendPhoneOtp = async (phone, otp) => {
    await sendSms(phone, `Your OTP is ${otp}.`);
};




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


const handleLogin = async (identifier, password, userRepository) => {
    let user = await userRepository.findOne({ where: [{ email: identifier }, { username: identifier }, { phone: identifier }] });
    
    if (!user || !await comparePassword(password, user.password)) {
        throw new Error('Invalid credentials');
    }
    
    if (!user.isActivated) {
        throw new Error('Account not activated');
    }
    
    return generateToken(user);
};

const loginAttemptsLimit = async (user) => {
    if (user.loginAttempts >= 5) {
        user.isLocked = true;
        return await user.save();
    }
};

const updateUserProfile = async (user, updates, userRepository) => {
    Object.assign(user, updates);
    return await userRepository.save(user);
};

const findUserById = async (id, userRepository) => {
    return await userRepository.findOne({ where: { id } });
};

const findUserByEmail = async (email, userRepository) => {
    return await userRepository.findOne({ where: { email } });
};

const checkIfUserExists = async (userRepository, username, email, phone) => {
    return await userRepository.findOne({
        where: [
            { username },
            { email },
            { phone }
        ]
    });
};

const assignRole = async (user, role, roleRepository, userRepository) => {
    const roleToAssign = await roleRepository.findOne({ where: { name: role } });
    if (roleToAssign) {
        user.roles.push(roleToAssign);
        return await userRepository.save(user);
    }
};

const hasRole = (user, roleName) => {
    return user.roles.some(role => role.name === roleName);
};

const hasPermission = (user, permissionName) => {
    return user.roles.some(role => role.permissions.includes(permissionName));
};



const sendActivationEmail = async (user, token) => {
    const activationLink = `${process.env.ACTIVATION_URL}/${token}`;
    await sendEmail({
        to: user.email,
        subject: 'Account Activation',
        text: `Activate your account using the link: ${activationLink}`,
    });
};


const sendPasswordResetEmail = async (user, token) => {
    const resetLink = `${process.env.RESET_URL}/${token}`;
    await sendEmail({
        to: user.email,
        subject: 'Password Reset',
        text: `Reset your password using the link: ${resetLink}`,
    });
};


const lockUserAccount = async (user, userRepository) => {
    user.isLocked = true;
    return await userRepository.save(user);
};

const unlockUserAccount = async (user, userRepository) => {
    user.isLocked = false;
    return await userRepository.save(user);
};

const logUserLogin = async (user, ip, activityLogRepository) => {
    return await activityLogRepository.save({
        userId: user.id,
        activityType: 'LOGIN',
        ipAddress: ip,
        timestamp: new Date(),
    });
};

const trackUserActivity = async (user, activity, activityLogRepository) => {
    return await activityLogRepository.save({
        userId: user.id,
        activityType: activity,
        timestamp: new Date(),
    });
};

const isPasswordExpired = (user) => {
    const passwordExpiryDate = new Date(user.passwordUpdatedAt);
    const today = new Date();
    const differenceInDays = (today - passwordExpiryDate) / (1000 * 60 * 60 * 24);
    return differenceInDays > 90;  // Assume 90 days for password expiry
};

const forcePasswordChange = async (user, newPassword, userRepository) => {
    if (isPasswordExpired(user)) {
        return await resetPassword(user, newPassword, userRepository);
    }
};

const verifyMfaCode = (user, inputCode) => {
    return user.mfaCode === inputCode;
};


const createSession = async (user, sessionRepository) => {
    return await sessionRepository.save({
        userId: user.id,
        loginTime: new Date(),
    });
};


const invalidateSession = async (sessionId, sessionRepository) => {
    const session = await sessionRepository.findOne({ where: { id: sessionId } });
    session.isActive = false;
    return await sessionRepository.save(session);
};

const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const validateUsername = (username) => {
    const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;
    return usernameRegex.test(username);
};
