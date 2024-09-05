const rolePermissionService = require('../services/rolePermission.service');

/**
 * Controller to handle creating a new rolePermission.
 * @param {object} req - The request object with the roleId and permissionId in the body.
 * @param {object} res - The response object.
 * @returns {Promise<void>}
 */
const createRolePermission = async (req, res) => {
    const { roleId, permissionId } = req.body;

    try {
        const newRolePermission = await rolePermissionService.createRolePermission({ roleId, permissionId });
        res.status(201).json({ message: 'RolePermission created successfully', rolePermission: newRolePermission });
    } catch (error) {
        res.status(500).json({ message: 'Error creating rolePermission', error: error.message });
    }
};

/**
 * Controller to get a rolePermission by roleId and permissionId.
 * @param {object} req - The request object with roleId and permissionId as params.
 * @param {object} res - The response object.
 * @returns {Promise<void>}
 */
const getRolePermissionById = async (req, res) => {
    const { roleId, permissionId } = req.params;

    try {
        const rolePermission = await rolePermissionService.findRolePermissionById(roleId, permissionId);
        if (!rolePermission) {
            return res.status(404).json({ message: 'RolePermission not found' });
        }
        res.status(200).json(rolePermission);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving rolePermission', error: error.message });
    }
};

/**
 * Controller to update an existing rolePermission.
 * @param {object} req - The request object with roleId and permissionId as params and data in the body.
 * @param {object} res - The response object.
 * @returns {Promise<void>}
 */
const updateRolePermission = async (req, res) => {
    const { roleId, permissionId } = req.params;
    const newData = req.body;

    try {
        const updatedRolePermission = await rolePermissionService.updateRolePermission(roleId, permissionId, newData);
        if (!updatedRolePermission) {
            return res.status(404).json({ message: 'RolePermission not found' });
        }
        res.status(200).json({ message: 'RolePermission updated successfully', rolePermission: updatedRolePermission });
    } catch (error) {
        res.status(500).json({ message: 'Error updating rolePermission', error: error.message });
    }
};

/**
 * Controller to delete a rolePermission.
 * @param {object} req - The request object with roleId and permissionId as params.
 * @param {object} res - The response object.
 * @returns {Promise<void>}
 */
const deleteRolePermission = async (req, res) => {
    const { roleId, permissionId } = req.params;

    try {
        const deleted = await rolePermissionService.deleteRolePermission(roleId, permissionId);
        if (!deleted) {
            return res.status(404).json({ message: 'RolePermission not found' });
        }
        res.status(200).json({ message: 'RolePermission deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting rolePermission', error: error.message });
    }
};

/**
 * Controller to get all rolePermissions.
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @returns {Promise<void>}
 */
const getAllRolePermissions = async (req, res) => {
    try {
        const rolePermissions = await rolePermissionService.getAllRolePermissions();
        res.status(200).json(rolePermissions);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving rolePermissions', error: error.message });
    }
};

module.exports = {
    createRolePermission,
    getRolePermissionById,
    updateRolePermission,
    deleteRolePermission,
    getAllRolePermissions,
};
