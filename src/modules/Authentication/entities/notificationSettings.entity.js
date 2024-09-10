const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
    name: 'NotificationSettings',
    tableName: 'notification_settings',
    columns: {
        id: { type: 'int', primary: true, generated: true },
        emailNotifications: { type: 'boolean', default: true }, // Enable or disable email notifications
        smsNotifications: { type: 'boolean', default: false }, // Enable or disable SMS notifications
        pushNotifications: { type: 'boolean', default: false }, // Enable or disable push notifications
        createdAt: { type: 'timestamp', createDate: true },
        updatedAt: { type: 'timestamp', updateDate: true },
    },
    relations: {
        user: {
            type: 'many-to-one',
            target: 'User',
            joinColumn: { name: 'user_id' },
            nullable: false, // User the settings belong to
        },
    },
});
