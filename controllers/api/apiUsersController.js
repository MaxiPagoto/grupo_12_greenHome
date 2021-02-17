const db = require('../../database/models/index');


const apisUsersController = {
    list: async (req,res)=>{
        try{
            const Users = await db.User.findAll({attributes: ['id','first_name','last_name', 'email']});
            let userList = []

            for (user of Users) {
                userList.push({
                    id:user.id,
                    first_name:user.first_name,
                    last_name:user.last_name,
                    email:user.email,
                    detail: '/api/users/'+user.id
                })
            }

            let data = {
                count:Users.length,
                users:userList
            }
            res.json(data)
        } catch {
            return res.json({
                status:'failed'
            })
        }
    },
    detail: async(req,res,netx)=>{
        try{
            const user= await db.User.findByPk(req.params.id,{attributes: ['id','first_name','last_name', 'email', 'avatar']})
            const detail = {
                id:user.id,
                first_name:user.first_name,
                last_name:user.last_name,
                email:user.email,
                avatar: user.avatar,
            }
            return res.json(detail)
        }catch{
            return res.json({
                status:'failed'
            })
        }
    },
    store: async(req,res,next)=>{
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