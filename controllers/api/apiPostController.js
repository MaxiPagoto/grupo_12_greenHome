const db = require('../../database/models/index');


const apisPostsController = {
        list: async (req,res)=>{
            const Posts = await db.Post.findAll();
            res.json({meta:{status:"success"},data:Posts})
        },
        store: async(req,res,next)=>{
            console.log(req.body)
            try {
                await db.Post.create(req.body)
                console.log(req.body)
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
                await db.Post.destroy(
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
            
        }         
    };

module.exports = apisPostsController;