const { unique } = require("drizzle-orm/mysql-core");

module.exports=(sequelize,DataTypes)=>{
        const Event = sequelize.define('Event', {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false,
                
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            date: {
                type: DataTypes.DATE,
                allowNull: false
            },
            location: {
                type: DataTypes.STRING,
                allowNull: false
            },
            organizer_id: {
                type: DataTypes.UUID,
                allowNull: false
            }
        });
    return Event;
}

