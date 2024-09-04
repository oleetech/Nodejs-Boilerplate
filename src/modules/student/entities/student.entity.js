// modules/student/entities/student.entity.js

const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
    name: 'Student',
    tableName: 'students',
    columns: {
        id: {
            type: 'int',
            primary: true,
            generated: true,
        },
        name: {
            type: 'varchar',
            nullable: false,
        },
        age: {
            type: 'int',
            nullable: false,
        },
        grade: {
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
