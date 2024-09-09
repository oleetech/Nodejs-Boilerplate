const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
    name: 'ActivityLog',
    tableName: 'activity_logs',
    columns: {
        id: {
            type: 'int',
            primary: true,
            generated: true,
        },
        activityType: {
            type: 'varchar',
            nullable: false,
        },
        ipAddress: {
            type: 'varchar',
            nullable: true,
        },
        timestamp: {
            type: 'timestamp',
            createDate: true,
        },
    },
    relations: {
        user: {
            type: 'many-to-one',
            target: 'User',
            joinColumn: { name: 'user_id' },
            nullable: false,
        },
    },
});
