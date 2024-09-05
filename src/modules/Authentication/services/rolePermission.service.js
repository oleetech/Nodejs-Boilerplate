const { AppDataSource } = require('../../../index');
const RolePermission = require('../entities/rolePermission.entity');

/**
 * Format the rolePermission response to exclude sensitive or unnecessary fields.
 * @param {object} rolePermission - The rolePermission entity object.
 * @returns {object} - The formatted rolePermission response.
 */
const formatRolePermissionResponse = (rolePermission) => {
    if (!rolePermission) return null;
    return {
        roleId: rolePermission.roleId,
        permissionId: rolePermission.permissionId,
    };
};

/**
 * Create a new RolePermission entry.
 * @param {object} data - The data to create the rolePermission.
 * @returns {Promise<object>} - The saved rolePermission response.
 */
const createRolePermission = async (data) => {
    const rolePermissionRepository = AppDataSource.getRepository(RolePermission);
    const rolePermission = rolePermissionRepository.create(data);
    const savedRolePermission = await rolePermissionRepository.save(rolePermission);
    return formatRolePermissionResponse(savedRolePermission);
};

/**
 * Find a RolePermission by its roleId and permissionId.
 * @param {number} roleId - The ID of the role.
 * @param {number} permissionId - The ID of the permission.
 * @returns {Promise<object>} - The found rolePermission or null.
 */
const findRolePermissionById = async (roleId, permissionId) => {
    const rolePermissionRepository = AppDataSource.getRepository(RolePermission);
    const rolePermission = await rolePermissionRepository.findOne({
        where: { roleId, permissionId },
    });
    return formatRolePermissionResponse(rolePermission);
};

/**
 * Update a RolePermission entry.
 * @param {number} roleId - The ID of the role.
 * @param {number} permissionId - The ID of the permission.
 * @param {object} newData - The data to update the rolePermission.
 * @returns {Promise<object>} - The updated rolePermission or null if not found.
 */
const updateRolePermission = async (roleId, permissionId, newData) => {
    const rolePermissionRepository = AppDataSource.getRepository(RolePermission);
    const rolePermission = await rolePermissionRepository.findOne({ where: { roleId, permissionId } });
    if (!rolePermission) return null;

    Object.assign(rolePermission, newData); // Update the existing fields
    const updatedRolePermission = await rolePermissionRepository.save(rolePermission);
    return formatRolePermissionResponse(updatedRolePermission);
};

/**
 * Delete a RolePermission by roleId and permissionId.
 * @param {number} roleId - The ID of the role.
 * @param {number} permissionId - The ID of the permission.
 * @returns {Promise<number>} - Number of affected rows (0 if not found).
 */
const deleteRolePermission = async (roleId, permissionId) => {
    const rolePermissionRepository = AppDataSource.getRepository(RolePermission);
    const result = await rolePermissionRepository.delete({ roleId, permissionId });
    return result.affected; // Returns 1 if deleted, 0 if not found
};

/**
 * Get all RolePermission entries.
 * @returns {Promise<Array>} - List of all rolePermissions.
 */
const getAllRolePermissions = async () => {
    const rolePermissionRepository = AppDataSource.getRepository(RolePermission);
    const rolePermissions = await rolePermissionRepository.find();
    return rolePermissions.map(formatRolePermissionResponse);
};

module.exports = {
    createRolePermission,
    findRolePermissionById,
    updateRolePermission,
    deleteRolePermission,
    getAllRolePermissions,
};
