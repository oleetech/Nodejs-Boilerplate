const { AppDataSource } = require('../../../index');
const Session = require('../entities/session.entity');
const User = require('../entities/user.entity');

/**
 * @function createSession
 * @description Creates a new session for a user.
 * @param {int} userId - The ID of the user for whom the session is created.
 * @returns {object} - The created session.
 */
const createSession = async (userId) => {
    const sessionRepository = AppDataSource.getRepository(Session);
    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOneBy({ id: userId });
    if (!user) {
        throw new Error('User not found');
    }

    const session = sessionRepository.create({
        user: user,
        loginTime: new Date(),
        isActive: true,
    });

    const savedSession = await sessionRepository.save(session);
    return savedSession;
};

/**
 * @function endSession
 * @description Marks a session as inactive (logs out).
 * @param {int} sessionId - The ID of the session to be ended.
 * @returns {boolean} - Whether the session was ended successfully.
 */
const endSession = async (sessionId) => {
    const sessionRepository = AppDataSource.getRepository(Session);

    const session = await sessionRepository.findOneBy({ id: sessionId });
    if (!session) {
        throw new Error('Session not found');
    }

    session.isActive = false;
    await sessionRepository.save(session);

    return true;
};

/**
 * @function getSessionByUser
 * @description Retrieves all sessions for a specific user.
 * @param {int} userId - The ID of the user.
 * @returns {Array} - List of sessions for the user.
 */
const getSessionByUser = async (userId) => {
    const sessionRepository = AppDataSource.getRepository(Session);
    const sessions = await sessionRepository.find({
        where: { user: { id: userId } },
        relations: ['user'],
    });

    return sessions;
};

/**
 * @function isUserSessionActive
 * @description Checks if the user has any active sessions.
 * @param {int} userId - The ID of the user.
 * @returns {boolean} - Whether the user has an active session.
 */
const isUserSessionActive = async (userId) => {
    const sessionRepository = AppDataSource.getRepository(Session);
    const activeSession = await sessionRepository.findOne({
        where: { user: { id: userId }, isActive: true },
    });

    return !!activeSession;
};

module.exports = {
    createSession,
    endSession,
    getSessionByUser,
    isUserSessionActive,
};
