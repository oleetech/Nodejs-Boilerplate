const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
    name: 'Permission',
    tableName: 'permissions',
    columns: {
        id: {
            type: 'int',
            primary: true,
            generated: true,
        },
        name: {
            type: 'varchar',
            unique: true,
            nullable: false,
        },
        model: {
            type: 'varchar',
            nullable: false,
        },
        action: {
            type: 'varchar',
            nullable: false,
        },
        createdAt: {
            type: 'timestamp',
            createDate: true,
        },
        updatedAt: {
            type: 'timestamp',
            updateDate: true,
        },
    },
});