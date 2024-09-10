const express = require('express');
const router = express.Router();
const activityLogController = require('../controllers/activityLog.controller');

// Route to create a new activity log
router.post('/logs', activityLogController.logActivity);

// Route to get logs by user ID
router.get('/logs/user/:userId', activityLogController.getLogsByUser);

// Route to get logs by activity type
router.get('/logs/type/:activityType', activityLogController.getLogsByType);

// Route to get all logs
router.get('/logs', activityLogController.getAllLogs);

// Route to delete a log by ID
router.delete('/logs/:logId', activityLogController.deleteLog);

module.exports = router;
