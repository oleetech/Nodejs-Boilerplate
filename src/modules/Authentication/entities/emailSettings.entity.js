const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
    name: 'EmailSettings',
    tableName: 'email_settings',
    columns: {
        id: { type: 'int', primary: true, generated: true },
        smtpHost: { type: 'varchar', nullable: false }, // SMTP Host (e.g., 'smtp.mailtrap.io')
        smtpPort: { type: 'int', nullable: false }, // SMTP Port (e.g., 587)
        smtpUsername: { type: 'varchar', nullable: true }, // SMTP username
        smtpPassword: { type: 'varchar', nullable: true }, // SMTP password (encrypted)
        fromEmail: { type: 'varchar', nullable: false }, // Default from email address
        isActive: { type: 'boolean', default: true }, // Whether email sending is enabled
        createdAt: { type: 'timestamp', createDate: true },
        updatedAt: { type: 'timestamp', updateDate: true },
    },
    relations: {
        company: {
            type: 'many-to-one',
            target: 'Company',
            joinColumn: { name: 'company_id' },
            nullable: true, // Nullable for global email settings
        },
    },
});
