const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
    name: 'Company',
    tableName: 'companies',
    columns: {
        id: { type: 'int', primary: true, generated: true },
        name: { type: 'varchar', nullable: false }, // Company Name
        logo: { type: 'varchar', nullable: true }, // URL to the company's logo
        email: { type: 'varchar', nullable: false }, // Company contact email
        phone: { type: 'varchar', nullable: true }, // Company contact phone number
        address: { type: 'text', nullable: true }, // Company address
        createdAt: { type: 'timestamp', createDate: true },
        updatedAt: { type: 'timestamp', updateDate: true },
    },
});
