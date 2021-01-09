module.exports = (sequelize, DataTypes) => {
    const alias = "Benefit"
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
        tableName: "benefits",
        timestamps: false
    }

    const Benefit = sequelize.define(alias, cols, config);

    Benefit.associate = function (models) {
        Benefit.belongsToMany(models.Product, {
            as: 'products',
            through: 'product_benefit',
            otherKey: 'product_id',
            foreignKey: 'benefit_id',
            timestamps: false
        }) 
    }

    return Benefit;
}
