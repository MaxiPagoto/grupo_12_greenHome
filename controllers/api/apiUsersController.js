const db = require('../../database/models/index.js');


const apisUsersController = {
    list: async (req,res)=>{
        const Users = await db.User.findAll({attributes: ['email']});
        res.json({meta:{status:"success"},data:Users})
    }
}

module.exports = apisUsersController;