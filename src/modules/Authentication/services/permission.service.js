// services/permission.service.js
const { AppDataSource } = require('../../../index'); // Ensure the path is correct
const Permission = require('../entities/permission.entity');

/**
 * @function formatPermissionResponse
 * @description Formats the permission data to ensure consistent field names across all responses.
 * @param {object} permission - The permission object to format.
 * @returns {object} - The formatted permission object.
 */
const formatPermissionResponse = (permission) => {
    if (!permission) return null;

    return {
        id: permission.id,
        name: permission.name,
        model: permission.model,
        action: permission.action,
        createdAt: permission.createdAt,
        updatedAt: permission.updatedAt,
    };
};

const createPermission = async (data) => {
    const permissionRepository = AppDataSource.getRepository(Permission);
    const permission = permissionRepository.create(data);
    const savedPermission = await permissionRepository.save(permission);
    return formatPermissionResponse(savedPermission);
};

const findPermissionById = async (id) => {
    const permissionRepository = AppDataSource.getRepository(Permission);
    const permission = await permissionRepository.findOneBy({ id });
    return formatPermissionResponse(permission);
};

const updatePermission = async (id, data) => {
    const permissionRepository = AppDataSource.getRepository(Permission);
    const permission = await findPermissionById(id);
    if (!permission) return null;

    Object.assign(permission, data);
    const updatedPermission = await permissionRepository.save(permission);
    return formatPermissionResponse(updatedPermission);
};

const deletePermission = async (id) => {
    const permissionRepository = AppDataSource.getRepository(Permission);
    const result = await permissionRepository.delete(id);
    return result.affected;
};

const getAllPermissions = async () => {
    const permissionRepository = AppDataSource.getRepository(Permission);
    const permissions = await permissionRepository.find();
    return permissions.map(formatPermissionResponse);
};

module.exports = {
    createPermission,
    findPermissionById,
    updatePermission,
    deletePermission,
    getAllPermissions,
};
