const { AppDataSource } = require('../../../index');
const UserUserGroup = require('../entities/userUserGroup.entity');

/**
 * Format the userUserGroup response to exclude sensitive or unnecessary fields.
 * @param {object} userUserGroup - The userUserGroup entity object.
 * @returns {object} - The formatted userUserGroup response.
 */
const formatUserUserGroupResponse = (userUserGroup) => {
    if (!userUserGroup) return null;
    return {
        userId: userUserGroup.userId,
        usergroupId: userUserGroup.usergroupId,
    };
};

/**
 * Create a new UserUserGroup entry.
 * @param {object} data - The data to create the userUserGroup.
 * @returns {Promise<object>} - The saved userUserGroup response.
 */
const createUserUserGroup = async (data) => {
    const userUserGroupRepository = AppDataSource.getRepository(UserUserGroup);
    const userUserGroup = userUserGroupRepository.create(data);
    const savedUserUserGroup = await userUserGroupRepository.save(userUserGroup);
    return formatUserUserGroupResponse(savedUserUserGroup);
};

/**
 * Find a UserUserGroup by its userId and usergroupId.
 * @param {number} userId - The ID of the user.
 * @param {number} usergroupId - The ID of the user group.
 * @returns {Promise<object>} - The found userUserGroup or null.
 */
const findUserUserGroupById = async (userId, usergroupId) => {
    const userUserGroupRepository = AppDataSource.getRepository(UserUserGroup);
    const userUserGroup = await userUserGroupRepository.findOne({
        where: { userId, usergroupId },
    });
    return formatUserUserGroupResponse(userUserGroup);
};

/**
 * Update a UserUserGroup entry.
 * @param {number} userId - The ID of the user.
 * @param {number} usergroupId - The ID of the user group.
 * @param {object} newData - The data to update the userUserGroup.
 * @returns {Promise<object>} - The updated userUserGroup or null if not found.
 */
const updateUserUserGroup = async (userId, usergroupId, newData) => {
    const userUserGroupRepository = AppDataSource.getRepository(UserUserGroup);
    const userUserGroup = await userUserGroupRepository.findOne({ where: { userId, usergroupId } });
    if (!userUserGroup) return null;

    Object.assign(userUserGroup, newData); // Update the existing fields
    const updatedUserUserGroup = await userUserGroupRepository.save(userUserGroup);
    return formatUserUserGroupResponse(updatedUserUserGroup);
};

/**
 * Delete a UserUserGroup by userId and usergroupId.
 * @param {number} userId - The ID of the user.
 * @param {number} usergroupId - The ID of the user group.
 * @returns {Promise<number>} - Number of affected rows (0 if not found).
 */
const deleteUserUserGroup = async (userId, usergroupId) => {
    const userUserGroupRepository = AppDataSource.getRepository(UserUserGroup);
    const result = await userUserGroupRepository.delete({ userId, usergroupId });
    return result.affected; // Returns 1 if deleted, 0 if not found
};

/**
 * Get all UserUserGroup entries.
 * @returns {Promise<Array>} - List of all userUserGroups.
 */
const getAllUserUserGroups = async () => {
    const userUserGroupRepository = AppDataSource.getRepository(UserUserGroup);
    const userUserGroups = await userUserGroupRepository.find();
    return userUserGroups.map(formatUserUserGroupResponse);
};

module.exports = {
    createUserUserGroup,
    findUserUserGroupById,
    updateUserUserGroup,
    deleteUserUserGroup,
    getAllUserUserGroups,
};
