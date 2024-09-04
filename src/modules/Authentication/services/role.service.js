const { AppDataSource } = require('../../../index'); // Ensure the path is correct
const Role = require('../entities/role.entity');

/**
 * @function formatRoleResponse
 * @description Formats the role data to ensure consistent field names across all responses.
 * @param {object} role - The role object to format.
 * @returns {object} - The formatted role object.
 */
const formatRoleResponse = (role) => {
    if (!role) return null;

    return {
        id: role.id,
        name: role.name,
        createdAt: role.createdAt,
        updatedAt: role.updatedAt
    };
};

const getRoles = async () => {
    try {
        const roles = await AppDataSource.getRepository(Role).find();
        return roles.map(formatRoleResponse);
    } catch (error) {
        throw new Error(`Failed to get roles: ${error.message}`);
    }
};

const getRoleById = async (id) => {
    try {
        const role = await AppDataSource.getRepository(Role).findOneBy({ id });
        return formatRoleResponse(role);
    } catch (error) {
        throw new Error(`Failed to get role by ID: ${error.message}`);
    }
};

const createRole = async (data) => {
    try {
        const roleRepository = AppDataSource.getRepository(Role);
        const newRole = roleRepository.create(data);
        const savedRole = await roleRepository.save(newRole);
        return formatRoleResponse(savedRole);
    } catch (error) {
        throw new Error(`Failed to create role: ${error.message}`);
    }
};

const updateRole = async (id, data) => {
    try {
        const roleRepository = AppDataSource.getRepository(Role);
        const role = await roleRepository.findOneBy({ id });

        if (!role) return null;

        roleRepository.merge(role, data);
        const updatedRole = await roleRepository.save(role);
        return formatRoleResponse(updatedRole);
    } catch (error) {
        throw new Error(`Failed to update role: ${error.message}`);
    }
};

const deleteRole = async (id) => {
    try {
        const roleRepository = AppDataSource.getRepository(Role);
        const role = await roleRepository.findOneBy({ id });

        if (!role) return 0;

        await roleRepository.delete(id);
        return 1; // Return 1 to indicate successful deletion
    } catch (error) {
        throw new Error(`Failed to delete role: ${error.message}`);
    }
};

const createDefaultRoles = async () => {
    try {
        const roleRepository = AppDataSource.getRepository(Role);

        const rolesToCreate = [
            { name: 'Admin', description: 'Full access to all resources.' },
            { name: 'Moderator', description: 'Can moderate user content.' },
            { name: 'Editor', description: 'Can edit and publish content.' },
            { name: 'Author', description: 'Can create and publish own content.' },
            { name: 'Subscriber', description: 'Can view content and manage own profile.' }
        ];

        for (const roleData of rolesToCreate) {
            const existingRole = await roleRepository.findOne({ where: { name: roleData.name } });

            if (!existingRole) {
                const newRole = roleRepository.create(roleData);
                await roleRepository.save(newRole);
                console.log(`Role created: ${roleData.name}`);
            } else {
                console.log(`Role already exists: ${roleData.name}`);
            }
        }
    } catch (error) {
        throw new Error(`Failed to create default roles: ${error.message}`);
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
