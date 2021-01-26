module.exports = (sequelize, DataTypes) => {
    const alias = "Product_recommendation"
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        product_id: {
            type: DataTypes.INTEGER
        },
        recommendationn_id: {
            type: DataTypes.INTEGER
        }
    }
    const config = {
        tableName: "Product_recommendation",
        timestamps: false
    }


    const Product_recommendation = sequelize.define(alias, cols, config);


  
    return Product_recommendation;
}
