const { Sequelize, DataTypes } = require('sequelize');
const dbConfig = require('../config/dbConfig.js');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorAliases: false,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
);

sequelize.authenticate()
    .then(() => {
        console.log('Connected....');
    })
    .catch(err => {
        console.log('Error: ' + err);
    });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models
db.event = require('./eventModels.js')(sequelize, DataTypes);
db.user = require('./userModels.js')(sequelize, DataTypes);
db.registration=require("./registrationModels.js")(sequelize,DataTypes);

db.sequelize.sync({ force: false })
    .then(() => {
        console.log('Yes, re-sync is done');
    })
    .catch(err => {
        console.error('Error during synchronization: ', err);
    });

module.exports = db;