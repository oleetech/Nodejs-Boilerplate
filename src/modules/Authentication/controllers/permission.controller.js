// controllers/permission.controller.js
const permissionService = require('../services/permission.service');

/**
 * @function createPermission
 * @description Creates a new permission.
 * @param {object} req - Request object.
 * @param {object} res - Response object.
 */
const createPermission = async (req, res) => {
    try {
        const permission = await permissionService.createPermission(req.body);
        res.status(201).json(permission);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create permission', error: error.message });
    }
};

/**
 * @function getPermissionById
 * @description Retrieves a permission by ID.
 * @param {object} req - Request object.
 * @param {object} res - Response object.
 */
const getPermissionById = async (req, res) => {
    try {
        const permission = await permissionService.findPermissionById(req.params.id);
        if (!permission) {
            return res.status(404).json({ message: 'Permission not found' });
        }
        res.status(200).json(permission);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve permission', error: error.message });
    }
};

/**
 * @function updatePermission
 * @description Updates a permission by ID.
 * @param {object} req - Request object.
 * @param {object} res - Response object.
 */
const updatePermission = async (req, res) => {
    try {
        const permission = await permissionService.updatePermission(req.params.id, req.body);
        if (!permission) {
            return res.status(404).json({ message: 'Permission not found' });
        }
        res.status(200).json(permission);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update permission', error: error.message });
    }
};

/**
 * @function deletePermission
 * @description Deletes a permission by ID.
 * @param {object} req - Request object.
 * @param {object} res - Response object.
 */
const deletePermission = async (req, res) => {
    try {
        const result = await permissionService.deletePermission(req.params.id);
        if (result === 0) {
            return res.status(404).json({ message: 'Permission not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete permission', error: error.message });
    }
};

/**
 * @function getAllPermissions
 * @description Retrieves all permissions.
 * @param {object} req - Request object.
 * @param {object} res - Response object.
 */
const getAllPermissions = async (req, res) => {
    try {
        const permissions = await permissionService.getAllPermissions();
        if (!permissions) {
            return res.status(404).json({ message: 'No permissions found' });
        }
        res.status(200).json(permissions);
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error',
            error: error.message || 'An unexpected error occurred',
        });
    }
};

module.exports = {
    createPermission,
    getPermissionById,
    updatePermission,
    deletePermission,
    getAllPermissions,
};
