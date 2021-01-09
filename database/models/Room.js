module.exports = (sequelize, DataTypes) => {
    const alias = "Room"
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        }
    }
    const config = {
        tableName: "rooms",
        timestamps: false
    }


    const Room = sequelize.define(alias, cols, config);

    Room.associate = function (models) {
        Room.belongsToMany(models.Product, {
            as: 'products',
            through: 'product_room',
            otherKey: 'product_id',
            foreignKey: 'room_id',
            timestamps: false
        }) 
    }

  
    return Room;
}
