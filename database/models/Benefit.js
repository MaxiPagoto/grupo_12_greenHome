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

    const User = sequelize.define(alias, cols, config);

    return User;
}
