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
    },
});
