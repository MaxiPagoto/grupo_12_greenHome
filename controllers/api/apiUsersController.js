const db = require('../../database/models/index');


const apisUsersController = {
    list: async (req,res)=>{
        const Users = await db.User.findAll({attributes: ['id','email']});
        res.json({meta:{status:"success"},data:Users})
    },
    store: async(req,res,next)=>{
        console.log(req.body)
        try {
            await db.User.create(req.body)
                return res.json({
                    status:'success'
                })
        }catch{
            return res.json({
                    status:'failed'
                })
            }
        },
    delete: async(req,res,next)=>{
        try{
            await db.User.destroy(
                {
                  where:{
                    id:req.body.id
                  }
                });
            return res.json({
                status:'success'
            })
        }catch{
            return res.json({
                status:'failed'
            })
        }
        
    },
    update: async (req,res)=>{
        try{
            await db.User.update({  
                password: bycrypt.hashSync(req.body.password, 10),
            },{where:{email:req.session.userLogged}});
            if (typeof req.files[0] !== 'undefined'){
                await db.User.update({
                avatar: req.files[0].filename},
                {where:{email:req.session.userLogged}}
                )
                return res.json({
                    status:'success'
                })
            }
        }catch{
            return res.json({
                status:'failed'
            })
        }
    }            
    };

module.exports = apisUsersController;