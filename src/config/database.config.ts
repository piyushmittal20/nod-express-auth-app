import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('defaultdb', 'avnadmin', 'AVNS_WZbjSWThgsVTyMRjAwa', {
    host: 'mysql-28ebaae8-piyushmittal-b3ea.a.aivencloud.com',
    port: 14485,
    dialect: 'mysql',
});

export { sequelize };