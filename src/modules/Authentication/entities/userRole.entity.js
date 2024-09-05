// entities/userRole.entity.js
const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
    name: 'UserRole',
    tableName: 'user_roles',
    columns: {
        userId: {
            type: 'int',
            primary: true,
        },
        roleId: {
            type: 'int',
            primary: true,
        },
    },
    relations: {
        user: {
            target: 'User',
            type: 'many-to-one',
            joinColumn: { name: 'userId' },
        },
        role: {
            target: 'Role',
            type: 'many-to-one',
            joinColumn: { name: 'roleId' },
        },
    },
});
