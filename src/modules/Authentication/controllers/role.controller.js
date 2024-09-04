const roleService = require('../services/role.service');

/**
 * @function getRoles
 * @description Retrieves all roles.
 * @param {object} req - Request object.
 * @param {object} res - Response object.
 */
const getRoles = async (req, res) => {
    try {
        const roles = await roleService.getRoles();
        if (!roles.length) {
            return res.status(404).json({ message: 'No roles found' });
        }
        res.status(200).json(roles);
    } catch (error) {
        res.status(500).json({ message: 'Failed to get roles', error: error.message });
    }
};

/**
 * @function getRoleById
 * @description Retrieves a role by ID.
 * @param {object} req - Request object.
 * @param {object} res - Response object.
 */
const getRoleById = async (req, res) => {
    try {
        const role = await roleService.getRoleById(req.params.id);
        if (!role) {
            return res.status(404).json({ message: 'Role not found' });
        }
        res.status(200).json(role);
    } catch (error) {
        res.status(500).json({ message: 'Failed to get role', error: error.message });
    }
};

/**
 * @function createRole
 * @description Creates a new role.
 * @param {object} req - Request object.
 * @param {object} res - Response object.
 */
const createRole = async (req, res) => {
    try {
        const role = await roleService.createRole(req.body);
        res.status(201).json(role);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create role', error: error.message });
    }
};

/**
 * @function updateRole
 * @description Updates a role by ID.
 * @param {object} req - Request object.
 * @param {object} res - Response object.
 */
const updateRole = async (req, res) => {
    try {
        const role = await roleService.updateRole(req.params.id, req.body);
        if (!role) {
            return res.status(404).json({ message: 'Role not found' });
        }
        res.status(200).json(role);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update role', error: error.message });
    }
};

/**
 * @function deleteRole
 * @description Deletes a role by ID.
 * @param {object} req - Request object.
 * @param {object} res - Response object.
 */
const deleteRole = async (req, res) => {
    try {
        const result = await roleService.deleteRole(req.params.id);
        if (result === 0) {
            return res.status(404).json({ message: 'Role not found' });
        }
        res.status(200).json({ message: 'Role deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete role', error: error.message });
    }
};

/**
 * @function createDefaultRoles
 * @description Creates default roles if they don't already exist.
 * @param {object} req - Request object.
 * @param {object} res - Response object.
 */
const createDefaultRoles = async (req, res) => {
    try {
        await roleService.createDefaultRoles();
        res.status(200).json({ message: 'Default roles created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create default roles', error: error.message });
    }
};

module.exports = {
    getRoles,
    getRoleById,
    createRole,
    updateRole,
    deleteRole,
    createDefaultRoles,
};
