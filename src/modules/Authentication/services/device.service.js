const { AppDataSource } = require('../../../index'); // Ensure the path is correct
const Device = require('../entities/device.entity'); // Import the Device entity
const User = require('../entities/user.entity');     // Import the User entity

/**
 * @function formatDeviceResponse
 * @description Formats the device data to ensure consistent field names across all responses.
 * @param {object} device - The device object to format.
 * @returns {object} - The formatted device object.
 */
const formatDeviceResponse = (device) => {
    if (!device) return null;

    return {
        id: device.id,
        deviceName: device.deviceName,
        deviceType: device.deviceType,
        deviceOs: device.deviceOs,
        macAddress: device.macAddress,
        ipAddress: device.ipAddress,
        lastLoginTime: device.lastLoginTime,
        userId: device.user.id,
        createdAt: device.createdAt,
        updatedAt: device.updatedAt,
    };
};

/**
 * @function linkUserToDevice
 * @description Links a device to a user.
 * @param {object} user - The user object.
 * @param {object} deviceData - The device data to create.
 * @returns {object} - The formatted device object.
 */
const linkUserToDevice = async (user, deviceData) => {
    const deviceRepository = AppDataSource.getRepository(Device);

    // Create a new device and link it to the user
    const device = deviceRepository.create({
        ...deviceData,
        user: user, // Link the device to the user
        lastLoginTime: new Date(), // Update login time
    });

    const savedDevice = await deviceRepository.save(device);
    return formatDeviceResponse(savedDevice);
};

/**
 * @function checkDeviceExist
 * @description Checks if a device already exists for the user (based on macAddress or device unique identifier).
 * @param {number} userId - The user's ID.
 * @param {string} macAddress - The MAC address or unique identifier of the device.
 * @returns {boolean} - True if device exists, false otherwise.
 */
const checkDeviceExist = async (userId, macAddress) => {
    const deviceRepository = AppDataSource.getRepository(Device);
    const device = await deviceRepository.findOne({
        where: { user: { id: userId }, macAddress },
    });
    return !!device; // Returns true if device exists
};

/**
 * @function removeUserDevice
 * @description Removes a linked device for a user by its ID.
 * @param {number} deviceId - The device ID.
 * @returns {boolean} - True if successfully removed, false if device not found.
 */
const removeUserDevice = async (deviceId) => {
    const deviceRepository = AppDataSource.getRepository(Device);
    const result = await deviceRepository.delete(deviceId);
    return result.affected > 0; // Return true if deletion is successful
};

/**
 * @function getUserDevices
 * @description Retrieves all devices linked to a user.
 * @param {number} userId - The user's ID.
 * @returns {array} - An array of formatted device objects.
 */
const getUserDevices = async (userId) => {
    const deviceRepository = AppDataSource.getRepository(Device);
    const devices = await deviceRepository.find({
        where: { user: { id: userId } },
    });
    return devices.map(formatDeviceResponse);
};

module.exports = {
    linkUserToDevice,
    checkDeviceExist,
    removeUserDevice,
    getUserDevices,
};
