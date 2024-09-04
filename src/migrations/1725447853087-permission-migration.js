const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class PermissionMigration1725447853087 {
    name = 'PermissionMigration1725447853087'

    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`permissions\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`model\` varchar(255) NOT NULL, \`action\` varchar(255) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_48ce552495d14eae9b187bb671\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`users\` DROP FOREIGN KEY \`FK_a2cecd1a3531c0b041e29ba46e1\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP FOREIGN KEY \`FK_d3ebf50495804588c5ef0d873ba\``);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`phone\` \`phone\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`firstName\` \`firstName\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`lastName\` \`lastName\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`googleId\` \`googleId\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`facebookId\` \`facebookId\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`otp\` \`otp\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`otpExpires\` \`otpExpires\` timestamp NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`activationToken\` \`activationToken\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`resetToken\` \`resetToken\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`role_id\` \`role_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`usergroup_id\` \`usergroup_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD CONSTRAINT \`FK_a2cecd1a3531c0b041e29ba46e1\` FOREIGN KEY (\`role_id\`) REFERENCES \`roles\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD CONSTRAINT \`FK_d3ebf50495804588c5ef0d873ba\` FOREIGN KEY (\`usergroup_id\`) REFERENCES \`user_groups\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`users\` DROP FOREIGN KEY \`FK_d3ebf50495804588c5ef0d873ba\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP FOREIGN KEY \`FK_a2cecd1a3531c0b041e29ba46e1\``);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`usergroup_id\` \`usergroup_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`role_id\` \`role_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`resetToken\` \`resetToken\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`activationToken\` \`activationToken\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`otpExpires\` \`otpExpires\` timestamp NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`otp\` \`otp\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`facebookId\` \`facebookId\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`googleId\` \`googleId\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`lastName\` \`lastName\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`firstName\` \`firstName\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`phone\` \`phone\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD CONSTRAINT \`FK_d3ebf50495804588c5ef0d873ba\` FOREIGN KEY (\`usergroup_id\`) REFERENCES \`user_groups\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD CONSTRAINT \`FK_a2cecd1a3531c0b041e29ba46e1\` FOREIGN KEY (\`role_id\`) REFERENCES \`roles\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`DROP INDEX \`IDX_48ce552495d14eae9b187bb671\` ON \`permissions\``);
        await queryRunner.query(`DROP TABLE \`permissions\``);
    }
}
