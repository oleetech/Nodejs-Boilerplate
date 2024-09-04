const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class InitialMigration1725441831915 {
    name = 'InitialMigration1725441831915'

    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`user_groups\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_cfdb13ccb9e22f9108f4298301\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`username\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`phone\` varchar(255) NULL, \`firstName\` varchar(255) NULL, \`lastName\` varchar(255) NULL, \`isActivated\` tinyint NOT NULL DEFAULT 0, \`googleId\` varchar(255) NULL, \`facebookId\` varchar(255) NULL, \`otp\` varchar(255) NULL, \`otpExpires\` timestamp NULL, \`activationToken\` varchar(255) NULL, \`resetToken\` varchar(255) NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`role_id\` int NULL, \`usergroup_id\` int NULL, UNIQUE INDEX \`IDX_fe0bb3f6520ee0469504521e71\` (\`username\`), UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`), UNIQUE INDEX \`IDX_a000cca60bcf04454e72769949\` (\`phone\`), UNIQUE INDEX \`IDX_f382af58ab36057334fb262efd\` (\`googleId\`), UNIQUE INDEX \`IDX_f9740e1e654a5daddb82c60bd7\` (\`facebookId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`roles\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_648e3f5447f725579d7d4ffdfb\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD CONSTRAINT \`FK_a2cecd1a3531c0b041e29ba46e1\` FOREIGN KEY (\`role_id\`) REFERENCES \`roles\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD CONSTRAINT \`FK_d3ebf50495804588c5ef0d873ba\` FOREIGN KEY (\`usergroup_id\`) REFERENCES \`user_groups\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`users\` DROP FOREIGN KEY \`FK_d3ebf50495804588c5ef0d873ba\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP FOREIGN KEY \`FK_a2cecd1a3531c0b041e29ba46e1\``);
        await queryRunner.query(`DROP INDEX \`IDX_648e3f5447f725579d7d4ffdfb\` ON \`roles\``);
        await queryRunner.query(`DROP TABLE \`roles\``);
        await queryRunner.query(`DROP INDEX \`IDX_f9740e1e654a5daddb82c60bd7\` ON \`users\``);
        await queryRunner.query(`DROP INDEX \`IDX_f382af58ab36057334fb262efd\` ON \`users\``);
        await queryRunner.query(`DROP INDEX \`IDX_a000cca60bcf04454e72769949\` ON \`users\``);
        await queryRunner.query(`DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`users\``);
        await queryRunner.query(`DROP INDEX \`IDX_fe0bb3f6520ee0469504521e71\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
        await queryRunner.query(`DROP INDEX \`IDX_cfdb13ccb9e22f9108f4298301\` ON \`user_groups\``);
        await queryRunner.query(`DROP TABLE \`user_groups\``);
    }
}
