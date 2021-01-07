module.exports = (sequelize, DataTypes) => {
    const alias = "Product"
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        },
        image: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.DECIMAL
        },
        discount: {
            type: DataTypes.INTEGER
        },
        line: {
            type: DataTypes.STRING
        },
        copy: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        prop_light: {
            type: DataTypes.INTEGER
        },
        prop_water: {
            type: DataTypes.INTEGER
        },
        prop_plantpot: {
            type: DataTypes.INTEGER
        },
        category_id: {
            type: DataTypes.INTEGER
        },
        prop_plague: {
            type: DataTypes.INTEGER
        },
        prop_height: {
            type: DataTypes.DECIMAL
        },
        prop_pet: {
            type: DataTypes.INTEGER
        },
        filter_dificult: {
            type: DataTypes.INTEGER
        }
    }
    const config = {
        tableName: "products",
        timestamps: false
    }

    const Product = sequelize.define(alias, cols, config);

    return Product;
}
