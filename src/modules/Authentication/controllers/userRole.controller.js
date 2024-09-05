// controllers/userRole.controller.js
const userRoleService = require('../services/userRole.service');

/**
 * Controller to handle creating a new userRole.
 * @param {object} req - The request object with the userId and roleId in the body.
 * @param {object} res - The response object.
 * @returns {Promise<void>}
 */
const createUserRole = async (req, res) => {
    const { userId, roleId } = req.body;

    try {
        const newUserRole = await userRoleService.createUserRole({ userId, roleId });
        res.status(201).json({ message: 'UserRole created successfully', userRole: newUserRole });
    } catch (error) {
        res.status(500).json({ message: 'Error creating userRole', error: error.message });
    }
};

/**
 * Controller to get a userRole by userId and roleId.
 * @param {object} req - The request object with userId and roleId as params.
 * @param {object} res - The response object.
 * @returns {Promise<void>}
 */
const getUserRoleById = async (req, res) => {
    const { userId, roleId } = req.params;

    try {
        const userRole = await userRoleService.findUserRoleById(userId, roleId);
        if (!userRole) {
            return res.status(404).json({ message: 'UserRole not found' });
        }
        res.status(200).json(userRole);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving userRole', error: error.message });
    }
};

/**
 * Controller to update an existing userRole.
 * @param {object} req - The request object with userId and roleId as params and data in the body.
 * @param {object} res - The response object.
 * @returns {Promise<void>}
 */
const updateUserRole = async (req, res) => {
    const { userId, roleId } = req.params;
    const newData = req.body;

    try {
        const updatedUserRole = await userRoleService.updateUserRole(userId, roleId, newData);
        if (!updatedUserRole) {
            return res.status(404).json({ message: 'UserRole not found' });
        }
        res.status(200).json({ message: 'UserRole updated successfully', userRole: updatedUserRole });
    } catch (error) {
        res.status(500).json({ message: 'Error updating userRole', error: error.message });
    }
};

/**
 * Controller to delete a userRole.
 * @param {object} req - The request object with userId and roleId as params.
 * @param {object} res - The response object.
 * @returns {Promise<void>}
 */
const deleteUserRole = async (req, res) => {
    const { userId, roleId } = req.params;

    try {
        const deleted = await userRoleService.deleteUserRole(userId, roleId);
        if (!deleted) {
            return res.status(404).json({ message: 'UserRole not found' });
        }
        res.status(200).json({ message: 'UserRole deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting userRole', error: error.message });
    }
};

/**
 * Controller to get all userRoles.
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @returns {Promise<void>}
 */
const getAllUserRoles = async (req, res) => {
    try {
        const userRoles = await userRoleService.getAllUserRoles();
        res.status(200).json(userRoles);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving userRoles', error: error.message });
    }
};

module.exports = {
    createUserRole,
    getUserRoleById,
    updateUserRole,
    deleteUserRole,
    getAllUserRoles,
};
