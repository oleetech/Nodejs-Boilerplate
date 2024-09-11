const express = require('express');
const router = express.Router();
const { register, login, activateAccount, verifyOtp,googleLogin, googleCallback } = require('../controllers/user.controller');

router.post('/register', register);
router.post('/login', login);

// Route for account activation
router.get('/activate/:token', activateAccount);

// Route for OTP verification
router.post('/verify-otp', verifyOtp);

// Route to initiate Google Login
router.get('/google', googleLogin);

// Route to handle Google OAuth callback
router.get('/google/callback', googleCallback);

module.exports = router;
