const { AppDataSource } = require('../../../index'); // Assuming you have a centralized DataSource
const ActivityLog = require('../entities/activityLog.entity');

const createActivityLog = async (userId, activityType, ipAddress = null) => {
    const activityLogRepository = AppDataSource.getRepository(ActivityLog);
    const logEntry = activityLogRepository.create({
        activityType,
        ipAddress,
        user: { id: userId }, // Assuming you're passing the userId here.
    });
    return await activityLogRepository.save(logEntry);
};

const getLogsByUser = async (userId) => {
    const activityLogRepository = AppDataSource.getRepository(ActivityLog);
    return await activityLogRepository.find({
        where: { user: { id: userId } },
        order: { timestamp: 'DESC' },
    });
};

const getLogsByType = async (activityType) => {
    const activityLogRepository = AppDataSource.getRepository(ActivityLog);
    return await activityLogRepository.find({
        where: { activityType },
        order: { timestamp: 'DESC' },
    });
};

const getAllLogs = async () => {
    const activityLogRepository = AppDataSource.getRepository(ActivityLog);
    return await activityLogRepository.find({
        order: { timestamp: 'DESC' },
    });
};

const deleteLog = async (logId) => {
    const activityLogRepository = AppDataSource.getRepository(ActivityLog);
    const result = await activityLogRepository.delete({ id: logId });
    return result.affected > 0;
};

module.exports = {
    createActivityLog,
    getLogsByUser,
    getLogsByType,
    getAllLogs,
    deleteLog,
};
