const AppDataSource = require('../config/database');
const User = require('../entities/User');

/**
 * Verifies the OTP provided by the user.
 * @param {string} contact - The user's email or phone.
 * @param {string} otp - The OTP to verify.
 * @param {Function} callback - The callback to execute upon successful verification.
 * @returns {Object} - The result of the verification.
 */
const verifyOtp = async (contact, otp, callback) => {
    try {
        const userRepository = AppDataSource.getRepository(User);

        // Determine if contact is an email or phone number
        const query = contact.includes('@') ? { email: contact } : { phone: contact };

        // Find the user by email or phone
        const user = await userRepository.findOne({ where: query });
        if (!user) {
            return { status: 400, message: 'ব্যবহারকারী পাওয়া যায়নি' };
        }

        // Check OTP expiration
        if (user.otpExpires && new Date() > user.otpExpires) {
            return { status: 400, message: 'OTP মেয়াদ শেষ হয়ে গেছে' };
        }

        // OTP verification
        if (user.otp !== otp) {
            return { status: 400, message: 'অবৈধ OTP' };
        }

        // Execute callback function if OTP is valid
        const result = await callback(user);

        // Clear OTP fields after successful verification
        user.otp = null;
        user.otpExpires = null;
        await userRepository.save(user);

        return result;
    } catch (err) {
        return { status: 500, message: 'OTP যাচাই করার সময় ত্রুটি', error: err.message };
    }
};

module.exports = verifyOtp;
