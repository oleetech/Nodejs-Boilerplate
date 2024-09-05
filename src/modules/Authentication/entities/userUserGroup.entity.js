const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
    name: 'UserUserGroup',
    tableName: 'user_usergroups',
    columns: {
        userId: {
            name: 'user_id',
            type: 'int',
            primary: true,
        },
        usergroupId: {
            name: 'usergroup_id',
            type: 'int',
            primary: true,
        },
    },
    relations: {
        user: {
            type: 'many-to-one',
            target: 'User',
            joinColumn: { name: 'user_id' },
            onDelete: 'CASCADE',
        },
        usergroup: {
            type: 'many-to-one',
            target: 'UserGroup',
            joinColumn: { name: 'usergroup_id' },
            onDelete: 'CASCADE',
        },
    },
});
