const deviceService = require('../services/device.service');
const userService = require('../services/user.service'); // Assuming you have a user service to find users

/**
 * @function linkDevice
 * @description Links a new device to the user.
 * @param {object} req - Request object.
 * @param {object} res - Response object.
 */
const linkDevice = async (req, res) => {
    try {
        const user = await userService.findUserById(req.body.userId); // Fetch the user by ID
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const device = await deviceService.linkUserToDevice(user, req.body.deviceData);
        res.status(201).json(device);
    } catch (error) {
        res.status(500).json({ message: 'Failed to link device', error: error.message });
    }
};

/**
 * @function checkDeviceExist
 * @description Checks if a device exists for the user.
 * @param {object} req - Request object.
 * @param {object} res - Response object.
 */
const checkDeviceExist = async (req, res) => {
    try {
        const { userId, macAddress } = req.body;
        const exists = await deviceService.checkDeviceExist(userId, macAddress);
        res.status(200).json({ exists });
    } catch (error) {
        res.status(500).json({ message: 'Failed to check device', error: error.message });
    }
};

/**
 * @function removeDevice
 * @description Removes a device linked to a user.
 * @param {object} req - Request object.
 * @param {object} res - Response object.
 */
const removeDevice = async (req, res) => {
    try {
        const result = await deviceService.removeUserDevice(req.params.deviceId);
        if (!result) {
            return res.status(404).json({ message: 'Device not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Failed to remove device', error: error.message });
    }
};

/**
 * @function getUserDevices
 * @description Retrieves all devices linked to a user.
 * @param {object} req - Request object.
 * @param {object} res - Response object.
 */
const getUserDevices = async (req, res) => {
    try {
        const devices = await deviceService.getUserDevices(req.params.userId);
        if (devices.length === 0) {
            return res.status(404).json({ message: 'No devices found for user' });
        }
        res.status(200).json(devices);
    } catch (error) {
        res.status(500).json({
            message: 'Failed to retrieve devices',
            error: error.message,
        });
    }
};

module.exports = {
    linkDevice,
    checkDeviceExist,
    removeDevice,
    getUserDevices,
};
