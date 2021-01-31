const db = require('../../database/models/index');


const apisItemsController = {
        store:  async (req,res)=>{
            try{
                let newItem = {
                    product_name: req.body.product_name,
                    image: req.body.image,
                    price: req.body.price,
                    quantity: 1,
                    discount: 0,
                    subtotal: (req.body.price*(1-(req.body.discount/100))),
                    status: 0,
                    user_id: 1,
                    product_id: 5,
                    order_id:null
                };
                console.log(newItem)
                await db.Item.create(newItem)
                res.json({meta:{status:"success"},data:newItem})
            } catch (e){
                res.json({status:"failed", error:e})
            }
            
        },list: async (req,res)=>{
            try{
                let id = req.params.id;
                const itemList = await db.Item.findAll({
                    where: {user_id:id}
                });
                const endpoint = "/api/orders/items/"+id
                res.json({meta:{status:"success",endpoint:endpoint},data:itemList})
            }catch(e){
                res.json(e)
            }
        },
        delete: async(req,res)=>{
            try{
                await db.Item.destroy({
                    where: {id:req.body.id}
                });
                res.json({meta:{status:"success"}})
            }catch (e){
                res.json({
                    meta:{status:"failed"},
                    error:e
                })
            }
        }
    };

module.exports = apisItemsController;