const { unique } = require("drizzle-orm/mysql-core");

module.exports = (sequelize, DataTypes) => {
    const Registration = sequelize.define('Registration', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            unique:true
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        },
        event_id: {
            type: DataTypes.UUID,
            allowNull: false
        },
        user_id: {
            type: DataTypes.UUID,
            allowNull: false
        },
        registered_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    });
    return Registration;
};
