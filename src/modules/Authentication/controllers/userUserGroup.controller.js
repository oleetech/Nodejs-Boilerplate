const userUserGroupService = require('../services/userUserGroup.service');

/**
 * Controller to handle creating a new userUserGroup.
 * @param {object} req - The request object with the userId and usergroupId in the body.
 * @param {object} res - The response object.
 * @returns {Promise<void>}
 */
const createUserUserGroup = async (req, res) => {
    const { userId, usergroupId } = req.body;

    try {
        const newUserUserGroup = await userUserGroupService.createUserUserGroup({ userId, usergroupId });
        res.status(201).json({ message: 'UserUserGroup created successfully', userUserGroup: newUserUserGroup });
    } catch (error) {
        res.status(500).json({ message: 'Error creating userUserGroup', error: error.message });
    }
};

/**
 * Controller to get a userUserGroup by userId and usergroupId.
 * @param {object} req - The request object with userId and usergroupId as params.
 * @param {object} res - The response object.
 * @returns {Promise<void>}
 */
const getUserUserGroupById = async (req, res) => {
    const { userId, usergroupId } = req.params;

    try {
        const userUserGroup = await userUserGroupService.findUserUserGroupById(userId, usergroupId);
        if (!userUserGroup) {
            return res.status(404).json({ message: 'UserUserGroup not found' });
        }
        res.status(200).json(userUserGroup);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving userUserGroup', error: error.message });
    }
};

/**
 * Controller to update an existing userUserGroup.
 * @param {object} req - The request object with userId and usergroupId as params and data in the body.
 * @param {object} res - The response object.
 * @returns {Promise<void>}
 */
const updateUserUserGroup = async (req, res) => {
    const { userId, usergroupId } = req.params;
    const newData = req.body;

    try {
        const updatedUserUserGroup = await userUserGroupService.updateUserUserGroup(userId, usergroupId, newData);
        if (!updatedUserUserGroup) {
            return res.status(404).json({ message: 'UserUserGroup not found' });
        }
        res.status(200).json({ message: 'UserUserGroup updated successfully', userUserGroup: updatedUserUserGroup });
    } catch (error) {
        res.status(500).json({ message: 'Error updating userUserGroup', error: error.message });
    }
};

/**
 * Controller to delete a userUserGroup.
 * @param {object} req - The request object with userId and usergroupId as params.
 * @param {object} res - The response object.
 * @returns {Promise<void>}
 */
const deleteUserUserGroup = async (req, res) => {
    const { userId, usergroupId } = req.params;

    try {
        const deleted = await userUserGroupService.deleteUserUserGroup(userId, usergroupId);
        if (!deleted) {
            return res.status(404).json({ message: 'UserUserGroup not found' });
        }
        res.status(200).json({ message: 'UserUserGroup deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting userUserGroup', error: error.message });
    }
};

/**
 * Controller to get all userUserGroups.
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @returns {Promise<void>}
 */
const getAllUserUserGroups = async (req, res) => {
    try {
        const userUserGroups = await userUserGroupService.getAllUserUserGroups();
        res.status(200).json(userUserGroups);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving userUserGroups', error: error.message });
    }
};

module.exports = {
    createUserUserGroup,
    getUserUserGroupById,
    updateUserUserGroup,
    deleteUserUserGroup,
    getAllUserUserGroups,
};
