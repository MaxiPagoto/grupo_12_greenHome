module.exports = (sequelize, DataTypes) => {
    const alias = "User"
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING
        },
        first_name: {
            type: DataTypes.STRING
        },
        last_name: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        category: {
            type: DataTypes.INTEGER
        },
        avatar: {
            type: DataTypes.STRING
        }
    }
    const config = {
        tableName: "users",
        timestamps: false
    }

    const User = sequelize.define(alias, cols, config);

    return User;
}
