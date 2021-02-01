const db = require('../../database/models/index');


const apisItemsController = {
        store:  async (req,res)=>{
            const userID = 1 //En realidad deberíamos tomar el userID de locals. Por ahora dejo el 1 porque no tenemos vista.
            try{
                let newItem = {
                    product_name: req.body.product_name,
                    image: req.body.image,
                    price: req.body.price,
                    quantity: 1,
                    discount: req.body.discount,
                    subtotal: (req.body.price*(1-(req.body.discount/100))),
                    status: 0,
                    user_id: userID,
                    product_id: 5,//por el momento puse 5. Pero tambien debería venir de la vista.
                    order_id:null  //esto queda null hasta que se crea una order
                };
                await db.Item.create(newItem)
                res.json({meta:{status:"success"},data:newItem})
            } catch (e){
                res.json({status:"failed", error:e})
            }
            
        },list: async (req,res)=>{ //el objetivo de este controlador es proveer a la vista de los items que no fueron comprados o lo que es igual que su "status:0". Esto es el equivalente a que "esté en el carrito".
            try{
                let id = req.params.id;
                const itemList = await db.Item.findAll({
                    where: {user_id:id, status:0}
                });
                if (itemList.length !== 0){
                    const endpoint = "/api/orders/items/"+id
                    res.json({meta:{status:"success",endpoint:endpoint},data:itemList})
                }else {
                    res.json({
                        meta:{status:"No items"}
                    })
                }
                    
            }catch(e){
                res.json(e)
            }
        },
        drop: async(req,res)=>{ //El objetivo de este controlador es "quitar del carrito" un elemento.
            try{
                await db.Item.destroy({
                    where: {id:req.body.id, status:0}
                });
                res.json({meta:{status:"success"}})
            }catch (e){
                res.json({
                    meta:{status:"failed"},
                    error:e
                })
            }
        },
        increase: (req,res)=>{ // el objetivo de este controlador es agregar un número más al quantity de un item NO comprado. Y volver a calcular el subtototal.
            res.json({meta:{status:"success"}})
        }

    };

module.exports = apisItemsController;