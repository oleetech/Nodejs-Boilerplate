const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class Migrations1725345826052 {
    name = 'Migrations1725345826052'

    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`students\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`age\` int NOT NULL, \`grade\` varchar(255) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE \`students\``);
    }
}
