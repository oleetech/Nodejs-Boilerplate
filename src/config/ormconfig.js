module.exports = {
    type: 'sqlite',
    database: 'database.sqlite', // SQLite database file
    entities: ['src/modules/**/*.js'], // Auto-load entities from modules
    migrations: ['src/migrations/*.js'], // Specify the migrations directory
    cli: {
      migrationsDir: 'src/migrations', // Directory where new migrations will be generated
    },
    synchronize: false, // Turn off synchronization when using migrations
    logging: true, // Enable logging for debugging (optional)
  };