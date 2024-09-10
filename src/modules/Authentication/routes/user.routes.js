const express = require('express');
const router = express.Router();

// Import the controller functions
const { register } = require('../controllers/user.controller');

// Route for user registration
router.post('/register', register);

module.exports = router;
