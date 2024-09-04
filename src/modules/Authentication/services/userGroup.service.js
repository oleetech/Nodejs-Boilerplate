// services/userGroup.service.js
const { AppDataSource } = require('../../../index'); // Ensure the path is correct
const UserGroup = require('../entities/userGroup.entity');

/**
 * @function formatUserGroupResponse
 * @description Formats the user group data to ensure consistent field names across all responses.
 * @param {object} userGroup - The user group object to format.
 * @returns {object} - The formatted user group object.
 */
const formatUserGroupResponse = (userGroup) => {
    if (!userGroup) return null;

    return {
        id: userGroup.id,
        name: userGroup.name,
        createdAt: userGroup.createdAt,
        updatedAt: userGroup.updatedAt,
    };
};

const createUserGroup = async (data) => {
    const userGroupRepository = AppDataSource.getRepository(UserGroup);
    const userGroup = userGroupRepository.create(data);
    const savedUserGroup = await userGroupRepository.save(userGroup);
    return formatUserGroupResponse(savedUserGroup);
};

const findUserGroupById = async (id) => {
    const userGroupRepository = AppDataSource.getRepository(UserGroup);
    const userGroup = await userGroupRepository.findOneBy({ id });
    return formatUserGroupResponse(userGroup);
};

const updateUserGroup = async (id, data) => {
    const userGroupRepository = AppDataSource.getRepository(UserGroup);
    const userGroup = await findUserGroupById(id);
    if (!userGroup) return null;

    Object.assign(userGroup, data);
    const updatedUserGroup = await userGroupRepository.save(userGroup);
    return formatUserGroupResponse(updatedUserGroup);
};

const deleteUserGroup = async (id) => {
    const userGroupRepository = AppDataSource.getRepository(UserGroup);
    const result = await userGroupRepository.delete(id);
    return result.affected;
};

const getAllUserGroups = async () => {
    const userGroupRepository = AppDataSource.getRepository(UserGroup);
    const userGroups = await userGroupRepository.find();
    return userGroups.map(formatUserGroupResponse);
};

module.exports = {
    createUserGroup,
    findUserGroupById,
    updateUserGroup,
    deleteUserGroup,
    getAllUserGroups,
};
