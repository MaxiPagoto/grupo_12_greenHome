module.exports = (sequelize, DataTypes) => {
    const alias = "Item"
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        product_name: {
            type: DataTypes.STRING
        },
        image: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.DECIMAL
        },
        quantity: {
            type: DataTypes.INTEGER
        },
        total: {
            type: DataTypes.DECIMAL
        },
        discount: {
            type: DataTypes.INTEGER
        },
        status: {
            type: DataTypes.INTEGER
        },
        user_id: {
            type: DataTypes.INTEGER
        },
        order_id: {
            type: DataTypes.INTEGER
        },
        product_id: {
            type: DataTypes.INTEGER
        },
    }
    const config = {
        tableName: "items",
        timestamps: false
    }

    const Item = sequelize.define(alias, cols, config);

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

    return Item;
}
