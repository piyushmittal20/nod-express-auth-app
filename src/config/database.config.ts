import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME || 'defaultdb', process.env.DB_USERNAME || 'defaultuser', process.env.DB_USERPASS || 'defaultpass', {
    host: process.env.DB_HOSTNAME,
    port: 14485,
    dialect: 'mysql',
});

export { sequelize };