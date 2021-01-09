module.exports = (sequelize, DataTypes) => {
    const alias = "Product_benefit"
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        product_id: {
            type: DataTypes.INTEGER
        },
        benefit_id: {
            type: DataTypes.INTEGER
        }
    }
    const config = {
        tableName: "product_benefit",
        timestamps: false
    }


    const Product_benefit = sequelize.define(alias, cols, config);


  
    return Product_benefit;
}
