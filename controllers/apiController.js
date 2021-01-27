const db = require('../database/models/index.js');



const apisController = {
    list: async (req,res)=>{
        const Users = await db.User.findAll({attributes: ['email']});
        res.json({meta:{status:"success"},data:Users})
    }
}

module.exports = apisController;