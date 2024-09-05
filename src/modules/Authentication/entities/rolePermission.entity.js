const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
    name: 'RolePermission',
    tableName: 'role_permissions',
    columns: {
        roleId: {
            name: 'role_id',
            type: 'int',
            primary: true,
        },
        permissionId: {
            name: 'permission_id',
            type: 'int',
            primary: true,
        },
    },
    relations: {
        role: {
            type: 'many-to-one',
            target: 'Role',
            joinColumn: { name: 'role_id' },
            onDelete: 'CASCADE',
        },
        permission: {
            type: 'many-to-one',
            target: 'Permission',
            joinColumn: { name: 'permission_id' },
            onDelete: 'CASCADE',
        },
    },
});