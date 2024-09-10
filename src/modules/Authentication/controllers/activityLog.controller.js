const activityLogService = require('../services/activityLog.service');

// Create a log entry
const logActivity = async (req, res) => {
    try {
        const { userId, activityType, ipAddress } = req.body; // Assuming the necessary data is passed in the request
        const logEntry = await activityLogService.createActivityLog(userId, activityType, ipAddress);
        res.status(201).json(logEntry);
    } catch (error) {
        res.status(500).json({ message: 'Failed to log activity', error: error.message });
    }
};

// Get logs by user ID
const getLogsByUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const logs = await activityLogService.getLogsByUser(userId);
        res.status(200).json(logs);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve logs', error: error.message });
    }
};

// Get logs by activity type
const getLogsByType = async (req, res) => {
    try {
        const { activityType } = req.params;
        const logs = await activityLogService.getLogsByType(activityType);
        res.status(200).json(logs);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve logs', error: error.message });
    }
};

// Get all logs
const getAllLogs = async (req, res) => {
    try {
        const logs = await activityLogService.getAllLogs();
        res.status(200).json(logs);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve logs', error: error.message });
    }
};

// Delete a log by ID
const deleteLog = async (req, res) => {
    try {
        const { logId } = req.params;
        const result = await activityLogService.deleteLog(logId);
        if (result) {
            res.status(200).json({ message: 'Log deleted successfully' });
        } else {
            res.status(404).json({ message: 'Log not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete log', error: error.message });
    }
};

module.exports = {
    logActivity,
    getLogsByUser,
    getLogsByType,
    getAllLogs,
    deleteLog,
};
