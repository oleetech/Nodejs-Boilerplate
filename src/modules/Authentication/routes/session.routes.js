const express = require('express');
const router = express.Router();
const sessionController = require('../controllers/session.controller');

// Create a new session (login)
router.post('/sessions', sessionController.createSession);

// End a session (logout)
router.patch('/sessions/:sessionId/end', sessionController.endSession);

// Get all sessions for a user
router.get('/sessions/user/:userId', sessionController.getSessionByUser);

// Check if a user has an active session
router.get('/sessions/user/:userId/active', sessionController.isUserSessionActive);

module.exports = router;
