module.exports = (sequelize, DataTypes) => {
    const alias = "Product_room"
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        product_id: {
            type: DataTypes.INTEGER
        },
        room_id: {
            type: DataTypes.INTEGER
        }
    }
    const config = {
        tableName: "product_room",
        timestamps: false
    }


    const Product_room = sequelize.define(alias, cols, config);


  
    return Product_room;
}
