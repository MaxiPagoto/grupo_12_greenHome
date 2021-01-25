module.exports = (sequelize, DataTypes) => {
    const alias = "Recommendation"
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        category: {
            type: DataTypes.INTEGER
        },
        text: {
            type: DataTypes.STRING
        },
        
    }
    const config = {
        tableName: "recommendations",
        timestamps: false
    }

    const Recommendation = sequelize.define(alias, cols, config);

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

    return Recommendation;
}
