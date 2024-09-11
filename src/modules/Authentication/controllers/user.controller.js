const userService = require('../services/user.service');
const passport = require('../middleware/passport-setup'); // Adjust the path as needed

const jwt = require('jsonwebtoken');

/**
 * Handles user registration.
 * @param {Object} req - The request object containing user details.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - Sends a response back to the client.
 */
const register = async (req, res) => {
    const { username, email, password, phone } = req.body;

    try {
        // Check if user already exists
        const existingUser = await userService.checkIfUserExists(username, email, phone);
        if (existingUser) {
            return res.status(400).json({ message: 'User already registered' });
        }

        // Hash the user password
        const hashedPassword = await userService.hashPassword(password);

        // Create a new user object
        const newUser = userService.createNewUser(username, email, hashedPassword, phone);

        // Handle email or phone registration
        let response;
        if (email) {
            response = await userService.handleEmailRegistration(newUser);
        } else if (phone) {
            response = await userService.handlePhoneRegistration(newUser, phone);
        } else {
            newUser.isActivated = true;  // No verification needed
            await userService.saveUser(newUser);
            response = { success: true, message: 'User registered successfully. No verification needed.' };
        }

        // Send appropriate response based on the registration result
        if (response.success) {
            return res.status(201).json({ message: response.message });
        } else {
            return res.status(500).json({ message: response.message, error: response.error });
        }
    } catch (err) {
        console.error('Error registering user:', err); // Log the error for debugging
        return res.status(500).json({ message: 'Error registering user', error: err.message });
    }
};

/**
 * Handles user login requests.
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
const login = async (req, res) => {
    const { identifier, password } = req.body;

    try {
        const result = await userService.login(identifier, password);
        res.json(result);
    } catch (err) {
        console.error("Error logging in user:", err);
        res.status(400).send(err.message);
    }
};


/**
 * Controller to activate user account.
 * @param {object} req - Express request object, containing the token in the request parameters.
 * @param {object} res - Express response object to send the result.
 */
const activateAccount = async (req, res) => {
    const { token } = req.params;  // Extract the token from the request parameters

    try {
        // Verify and decode the token
        const decoded = await userService.verifyToken(token);

        // Find the user by decoded ID
        const user = await userService.findUserById(decoded.id);

        // If user not found, return error response
        if (!user) {
            return res.status(400).json({ message: 'Invalid activation link.' });
        }

        // Activate the user's account
        await userService.activateUserAccount(user);

        // Send success response
        res.status(200).json({ message: 'Account successfully activated.' });
    } catch (err) {
        // If any error occurs, send error response
        res.status(400).json({ message: 'Invalid or expired activation link.', error: err.message });
    }
};


/**
 * Controller method to verify OTP and handle different actions based on params.
 * @param {object} req - The request object containing the contact, otp, params, and optionally newPassword.
 * @param {object} res - The response object.
 * @returns {Promise<void>}
 */
const verifyOtp = async (req, res) => {
    const { contact, otp, params, newPassword } = req.body;

    try {
        // Ensure required fields are provided
        if (!contact || !otp || !params) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        // Ensure newPassword is provided for password reset
        if (params === 'reset-password' && !newPassword) {
            return res.status(400).json({ message: 'New password is required for reset-password' });
        }

        // Fetch the user data
        const user = await userService.findUserByContact(contact);
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        // Define a callback based on the params value
        let callback;
        if (params === 'register') {
            callback = async () => {
                return await userService.registrationCallback(user);
            };
        } else if (params === 'login') {
            callback = async () => {
                return await userService.loginCallback(user);
            };
        } else if (params === 'reset-password') {
            if (!newPassword) {
                return res.status(400).json({ message: 'New password is required for reset-password' });
            }
            callback = async () => {
                return await userService.resetPasswordCallback(user, newPassword);
            };
        } else {
            return res.status(400).json({ message: 'Invalid params value' });
        }

        // Verify OTP and execute the callback
        const result = await userService.verifyOtp(user, otp, callback);

        // Send response based on result
        res.status(result.status).json({ message: result.message, token: result.token || null });
    } catch (err) {
        res.status(500).json({ message: 'Error verifying OTP', error: err.message });
    }
};


// Controller for Google Login
const googleLogin = (req, res, next) => {
    passport.authenticate('google', { scope: ['profile', 'email'] })(req, res, next);
};

// Controller for Google Callback
const googleCallback = (req, res, next) => {
    passport.authenticate('google', { session: false }, async (err, user, info) => {
        if (err) {
            console.error("Error during authentication:", err);
            return res.status(400).json({ message: 'Login failed', error: err.message });
        }

        if (!user) {
            console.error("No user found:", info);
            return res.status(400).json({ message: 'Login failed', error: info || 'No user found' });
        }

        // Log the user information
        console.log("Authenticated user:", user);

        // Handle Google Callback
        try {
            // Generate JWT Token
            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

            // Return the token and user information
            return res.json({
                message: 'Login successful',
                token,
                user
            });
        } catch (err) {
            console.error("Error during Google OAuth callback:", err);
            return res.status(500).json({ message: 'Error during login', error: err.message });
        }
    })(req, res, next);
};

module.exports = { register,login,activateAccount,verifyOtp, googleLogin, googleCallback  };
