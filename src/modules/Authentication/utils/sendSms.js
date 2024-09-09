const twilio = require('twilio');
require('dotenv').config(); // Ensure environment variables are loaded

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

/**
 * Sends an SMS with the provided OTP to the specified phone number.
 * @param {string} phone - The recipient's phone number.
 * @param {string} otp - The OTP to send.
 */
const sendSms = async (phone, otp) => {
    try {
        await client.messages.create({
            body: `Your OTP is: ${otp}`,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: phone,
        });
        console.log('OTP sent successfully');
    } catch (err) {
        console.error('Error sending OTP:', err);
        throw err;
    }
};

module.exports = sendSms;
