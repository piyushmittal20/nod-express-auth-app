import { sequelize } from "./database.config";

async function initializeDatabase() {
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');

        // Synchronize the model with the database
        await sequelize.sync({ force: true });
        console.log('Database synchronized.');

    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export {initializeDatabase}