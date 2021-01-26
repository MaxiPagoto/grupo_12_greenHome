module.exports = (sequelize, DataTypes) => {
    const alias = "Post"
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        user_id: {
            type: DataTypes.INTEGER
        },
        product_id: {
            type: DataTypes.INTEGER
        },
        image: {
            type: DataTypes.STRING
        },
        text: {
            type: DataTypes.STRING
        },
        
    }
    const config = {
        tableName: "posts",
        timestamps: false
    }

    const Post = sequelize.define(alias, cols, config);


    Post.associate = function (models){
        Post.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'user_id'
        });

        Post.belongsTo(models.Product, {
            as: 'product',
            foreignKey: 'product_id'
        });
    }
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

    return Post;
}
