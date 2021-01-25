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

/*

    Product.associate = function (models) {

        Product.belongsTo(models.Category, {
            as: 'category',
            foreignKey: 'category_id'
        });

        Product.belongsToMany(models.Room, {
            as: 'rooms',
            through: 'product_room',
            foreignKey: 'product_id',
            otherKey: 'room_id',
            timestamps: false
        });
        Product.belongsToMany(models.Benefit, {
            as: 'benefits',
            through: 'product_benefit',
            foreignKey: 'product_id',
            otherKey: 'benefit_id',
            timestamps: false
        })
    }
*/

    return Order;
}
