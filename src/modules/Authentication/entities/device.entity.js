const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
    name: 'Device',
    tableName: 'devices',
    columns: {
        id: {
            type: 'int',
            primary: true,
            generated: true,
        },
        deviceName: {
            type: 'varchar',
            nullable: false,
        },
        deviceType: {
            type: 'varchar',
            nullable: false, // e.g., "Mobile", "Tablet", "Laptop", etc.
        },
        deviceOs: {
            type: 'varchar',
            nullable: true,  // e.g., "iOS", "Android", "Windows", etc.
        },
        macAddress: {
            type: 'varchar',
            unique: true,
            nullable: false,  // Unique identifier for the device
        },
        ipAddress: {
            type: 'varchar',
            nullable: true,
        },
        lastLoginTime: {
            type: 'timestamp',
            nullable: true,
        },
        createdAt: {
            name: 'created_at',
            type: 'timestamp',
            createDate: true,
        },
        updatedAt: {
            name: 'updated_at',
            type: 'timestamp',
            updateDate: true,
        },
    },
    relations: {
        user: {
            type: 'many-to-one',  // One user can have multiple devices
            target: 'User',
            joinColumn: { name: 'user_id' },
            nullable: false,
            onDelete: 'CASCADE',  // If the user is deleted, their devices are deleted as well
        },
    },
});
