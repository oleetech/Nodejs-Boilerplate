const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
    name: 'Settings',
    tableName: 'settings',
    columns: {
        id: { type: 'int', primary: true, generated: true }, // Primary key
        key: { type: 'varchar', length: 255, nullable: false }, // Setting key (e.g., 'app_name', 'theme_color')
        value: { type: 'text', nullable: false }, // The actual setting value (e.g., 'My ERP', '#FFFFFF')
        category: { type: 'varchar', length: 255, nullable: true }, // Category of the setting (e.g., 'General', 'Theme')
        isGlobal: { type: 'boolean', default: false }, // Whether the setting applies globally
        createdAt: { type: 'timestamp', createDate: true }, // When the setting was created
        updatedAt: { type: 'timestamp', updateDate: true }, // When the setting was last updated
    },
    relations: {
        company: {
            type: 'many-to-one',
            target: 'Company',
            joinColumn: { name: 'company_id' }, // Foreign key to the 'Company' entity
            nullable: true, // Nullable, so it can be a global setting if no company is specified
        },
    },
});
