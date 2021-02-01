module.exports = (sequelize, DataTypes) => {
    const alias = "Order"
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        order_number: {
            type: DataTypes.INTEGER
        },
        total: {
            type: DataTypes.DECIMAL
        },
        user_id: {
            type: DataTypes.INTEGER
        }
    }
    const config = {
        tableName: "orders",
        timestamps: false
    }

    const Order = sequelize.define(alias, cols, config);

    Order.associate = function (models){
        Order.hasMany(models.Item, {
            as: 'items',
            foreignKey: 'order_id'
        });
        Order.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'user_id'
        });
    }

    return Order;
    
}
