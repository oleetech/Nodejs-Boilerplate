/**
 * Generates a 6-digit OTP.
 * @returns {string} - The generated OTP.
 */
const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
};

module.exports = generateOtp;
