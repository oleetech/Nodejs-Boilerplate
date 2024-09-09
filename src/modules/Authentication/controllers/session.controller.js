const sessionService = require('../services/session.service');

/**
 * @function createSession
 * @description Creates a session for a user (logs in).
 * @param {object} req - Request object.
 * @param {object} res - Response object.
 */
const createSession = async (req, res) => {
    try {
        const userId = req.body.userId;
        const session = await sessionService.createSession(userId);
        res.status(201).json(session);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create session', error: error.message });
    }
};

/**
 * @function endSession
 * @description Ends a session (logs out).
 * @param {object} req - Request object.
 * @param {object} res - Response object.
 */
const endSession = async (req, res) => {
    try {
        const sessionId = req.params.sessionId;
        const result = await sessionService.endSession(sessionId);
        if (!result) {
            return res.status(404).json({ message: 'Session not found' });
        }
        res.status(200).json({ message: 'Session ended successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to end session', error: error.message });
    }
};

/**
 * @function getSessionByUser
 * @description Retrieves all sessions for a user.
 * @param {object} req - Request object.
 * @param {object} res - Response object.
 */
const getSessionByUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const sessions = await sessionService.getSessionByUser(userId);
        res.status(200).json(sessions);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve sessions', error: error.message });
    }
};

/**
 * @function isUserSessionActive
 * @description Checks if a user has an active session.
 * @param {object} req - Request object.
 * @param {object} res - Response object.
 */
const isUserSessionActive = async (req, res) => {
    try {
        const userId = req.params.userId;
        const isActive = await sessionService.isUserSessionActive(userId);
        res.status(200).json({ isActive });
    } catch (error) {
        res.status(500).json({ message: 'Failed to check session status', error: error.message });
    }
};

module.exports = {
    createSession,
    endSession,
    getSessionByUser,
    isUserSessionActive,
};
