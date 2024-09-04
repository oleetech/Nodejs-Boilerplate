// controllers/userGroup.controller.js
const userGroupService = require('../services/userGroup.service');

/**
 * @function createUserGroup
 * @description Creates a new user group.
 * @param {object} req - Request object.
 * @param {object} res - Response object.
 */
const createUserGroup = async (req, res) => {
    try {
        const userGroup = await userGroupService.createUserGroup(req.body);
        res.status(201).json(userGroup);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create user group', error: error.message });
    }
};

/**
 * @function getUserGroupById
 * @description Retrieves a user group by ID.
 * @param {object} req - Request object.
 * @param {object} res - Response object.
 */
const getUserGroupById = async (req, res) => {
    try {
        const userGroup = await userGroupService.findUserGroupById(req.params.id);
        if (!userGroup) {
            return res.status(404).json({ message: 'User group not found' });
        }
        res.status(200).json(userGroup);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve user group', error: error.message });
    }
};

/**
 * @function updateUserGroup
 * @description Updates a user group by ID.
 * @param {object} req - Request object.
 * @param {object} res - Response object.
 */
const updateUserGroup = async (req, res) => {
    try {
        const userGroup = await userGroupService.updateUserGroup(req.params.id, req.body);
        if (!userGroup) {
            return res.status(404).json({ message: 'User group not found' });
        }
        res.status(200).json(userGroup);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update user group', error: error.message });
    }
};

/**
 * @function deleteUserGroup
 * @description Deletes a user group by ID.
 * @param {object} req - Request object.
 * @param {object} res - Response object.
 */
const deleteUserGroup = async (req, res) => {
    try {
        const result = await userGroupService.deleteUserGroup(req.params.id);
        if (result === 0) {
            return res.status(404).json({ message: 'User group not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete user group', error: error.message });
    }
};

/**
 * @function getAllUserGroups
 * @description Retrieves all user groups.
 * @param {object} req - Request object.
 * @param {object} res - Response object.
 */
const getAllUserGroups = async (req, res) => {
    try {
        const userGroups = await userGroupService.getAllUserGroups();
        if (!userGroups) {
            return res.status(404).json({ message: 'No user groups found' });
        }
        res.status(200).json(userGroups);
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error',
            error: error.message || 'An unexpected error occurred',
        });
    }
};

module.exports = {
    createUserGroup,
    getUserGroupById,
    updateUserGroup,
    deleteUserGroup,
    getAllUserGroups,
};
