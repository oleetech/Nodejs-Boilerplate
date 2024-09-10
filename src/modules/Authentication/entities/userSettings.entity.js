const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
    name: 'UserSettings',
    tableName: 'user_settings',
    columns: {
        id: { type: 'int', primary: true, generated: true },
        key: { type: 'varchar', length: 255, nullable: false }, // e.g., 'notification_emails'
        value: { type: 'text', nullable: false }, // e.g., 'true'
        createdAt: { type: 'timestamp', createDate: true },
        updatedAt: { type: 'timestamp', updateDate: true },
    },
    relations: {
        user: {
            type: 'many-to-one',
            target: 'User',
            joinColumn: { name: 'user_id' }, // Foreign key to the 'User' entity
            nullable: false,
        },
    },
});
