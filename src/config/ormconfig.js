// module.exports = {
//     type: 'sqlite',
//     database: 'database.sqlite', // SQLite database file
// entities: ['src/modules/**/entities/*.js'],
// migrations: ['src/migrations/*.js'],
// cli: {
//     migrationsDir: 'src/migrations',
// },
// synchronize: false,
//     logging: true, // Enable logging for debugging (optional)
// };



module.exports = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'olee',
    entities: ['src/modules/**/entities/*.js'], // Ensure this path is correct
    migrations: ['src/migrations/*.js'],
    cli: {
        migrationsDir: 'src/migrations',
    },
    synchronize: false,
    logging: ['query', 'error'], // Enable more verbose logging
};

