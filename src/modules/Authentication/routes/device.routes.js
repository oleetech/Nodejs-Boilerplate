const express = require('express');
const router = express.Router();
const deviceController = require('../controllers/device.controller');

router.post('/devices/link', deviceController.linkDevice);
router.post('/devices/check', deviceController.checkDeviceExist);
router.delete('/devices/:deviceId', deviceController.removeDevice);
router.get('/devices/user/:userId', deviceController.getUserDevices);

module.exports = router;
