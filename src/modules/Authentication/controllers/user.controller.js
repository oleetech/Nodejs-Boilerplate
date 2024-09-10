const { 
    handleEmailRegistration, 
    handlePhoneRegistration, 
    hashPassword, 
    createNewUser, 
    checkIfUserExists, 
    saveUser 
} = require('../services/user.service');

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
        const existingUser = await checkIfUserExists(username, email, phone);
        if (existingUser) {
            return res.status(400).json({ message: 'User already registered' });
        }

        // Hash the user password
        const hashedPassword = await hashPassword(password);

        // Create a new user object
        const newUser = createNewUser(username, email, hashedPassword, phone);

        // Handle email or phone registration
        let response;
        if (email) {
            response = await handleEmailRegistration(newUser);
        } else if (phone) {
            response = await handlePhoneRegistration(newUser, phone);
        } else {
            newUser.isActivated = true;  // No verification needed
            await saveUser(newUser);
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

module.exports = { register };
