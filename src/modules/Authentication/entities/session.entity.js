const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
    name: 'Session',
    tableName: 'sessions',
    columns: {
        id: {
            type: 'int',
            primary: true,
            generated: true,
        },
        loginTime: {
            type: 'timestamp',
            createDate: true,
        },
        isActive: {
            type: 'boolean',
            default: true,
        },
    },
    relations: {
        user: {
            type: 'many-to-one',
            target: 'User',
            joinColumn: { name: 'user_id' },
            nullable: false,
            onDelete: 'CASCADE',
        },
    },
});
