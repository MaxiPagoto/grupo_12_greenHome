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

    User.associate = function (models) {
        User.hasMany(models.Post, {
            as: 'posts',
            foreignKey: 'user_id'
        });
        User.hasMany(models.Item, {
            as: 'items',
            foreignKey: 'user_id'
        });
        User.hasMany(models.Order, {
            as: 'orders',
            foreignKey: 'user_id'
        });
    }

    return User;
}
