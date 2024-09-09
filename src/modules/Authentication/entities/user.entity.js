const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
    name: 'User',
    tableName: 'users',
    columns: {
        id: {
            type: 'int',
            primary: true,
            generated: true,
        },
        username: {
            type: 'varchar',
            unique: true,
            nullable: false,
        },
        email: {
            type: 'varchar',
            unique: true,
            nullable: false,
        },
        password: {
            type: 'varchar',
            nullable: false,
        },
        phone: {
            type: 'varchar',
            unique: true,
            nullable: true,
        },
        firstName: {
            type: 'varchar',
            nullable: true,
        },
        lastName: {
            type: 'varchar',
            nullable: true,
        },
        isActivated: {
            type: 'boolean',
            default: false,
        },
        isLocked: {
            type: 'boolean',
            default: false,
        },
        isMfaEnabled: {
            type: 'boolean',
            default: false,
        },
        mfaCode: {
            type: 'varchar',
            nullable: true,
        },
        googleId: {
            type: 'varchar',
            unique: true,
            nullable: true,
        },
        facebookId: {
            type: 'varchar',
            unique: true,
            nullable: true,
        },
        otp: {
            type: 'varchar',
            nullable: true,
        },
        otpExpires: {
            type: 'timestamp',
            nullable: true,
        },
        activationToken: {
            type: 'varchar',
            nullable: true,
        },
        resetToken: {
            type: 'varchar',
            nullable: true,
        },
        passwordUpdatedAt: {
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
        role: {
            type: 'many-to-one',
            target: 'Role',
            joinColumn: { name: 'role_id' },
            nullable: true,
            onDelete: 'SET NULL',
        },
        usergroup: {
            type: 'many-to-one',
            target: 'UserGroup',
            joinColumn: { name: 'usergroup_id' },
            nullable: true,
            onDelete: 'SET NULL',
        },
        devices: {
            type: 'one-to-many',  // One user can have multiple devices
            target: 'Device',
            inverseSide: 'user',
            cascade: true,  // Optional: Automatically save devices when a user is saved
        },
        sessions: {
            type: 'one-to-many',
            target: 'Session',
            inverseSide: 'user',
        },
        activityLogs: {
            type: 'one-to-many',
            target: 'ActivityLog',
            inverseSide: 'user',
        },
    },
});
