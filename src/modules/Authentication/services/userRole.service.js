// services/userRole.service.js
const { AppDataSource } = require('../../../index');
const UserRole = require('../entities/userRole.entity');

/**
 * Format the user role response to exclude sensitive or unnecessary fields.
 * @param {object} userRole - The userRole entity object.
 * @returns {object} - The formatted userRole response.
 */
const formatUserRoleResponse = (userRole) => {
    if (!userRole) return null;
    return {
        userId: userRole.userId,
        roleId: userRole.roleId,
    };
};

/**
 * Create a new UserRole entry.
 * @param {object} data - The data to create the userRole.
 * @returns {Promise<object>} - The saved userRole response.
 */
const createUserRole = async (data) => {
    const userRoleRepository = AppDataSource.getRepository(UserRole);
    const userRole = userRoleRepository.create(data);
    const savedUserRole = await userRoleRepository.save(userRole);
    return formatUserRoleResponse(savedUserRole);
};

/**
 * Find a UserRole by its userId and roleId.
 * @param {number} userId - The ID of the user.
 * @param {number} roleId - The ID of the role.
 * @returns {Promise<object>} - The found userRole or null.
 */
const findUserRoleById = async (userId, roleId) => {
    const userRoleRepository = AppDataSource.getRepository(UserRole);
    const userRole = await userRoleRepository.findOne({
        where: { userId, roleId },
    });
    return formatUserRoleResponse(userRole);
};

/**
 * Update a UserRole entry.
 * @param {number} userId - The ID of the user.
 * @param {number} roleId - The ID of the role.
 * @param {object} newData - The data to update the userRole.
 * @returns {Promise<object>} - The updated userRole or null if not found.
 */
const updateUserRole = async (userId, roleId, newData) => {
    const userRoleRepository = AppDataSource.getRepository(UserRole);
    const userRole = await userRoleRepository.findOne({ where: { userId, roleId } });
    if (!userRole) return null;

    Object.assign(userRole, newData); // Update the existing fields
    const updatedUserRole = await userRoleRepository.save(userRole);
    return formatUserRoleResponse(updatedUserRole);
};

/**
 * Delete a UserRole by userId and roleId.
 * @param {number} userId - The ID of the user.
 * @param {number} roleId - The ID of the role.
 * @returns {Promise<number>} - Number of affected rows (0 if not found).
 */
const deleteUserRole = async (userId, roleId) => {
    const userRoleRepository = AppDataSource.getRepository(UserRole);
    const result = await userRoleRepository.delete({ userId, roleId });
    return result.affected; // Returns 1 if deleted, 0 if not found
};

/**
 * Get all UserRole entries.
 * @returns {Promise<Array>} - List of all userRoles.
 */
const getAllUserRoles = async () => {
    const userRoleRepository = AppDataSource.getRepository(UserRole);
    const userRoles = await userRoleRepository.find();
    return userRoles.map(formatUserRoleResponse);
};

module.exports = {
    createUserRole,
    findUserRoleById,
    updateUserRole,
    deleteUserRole,
    getAllUserRoles,
};
