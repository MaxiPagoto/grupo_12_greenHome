const db = require('../../database/models/index');


const apisCartsController = {
        buy: async (req,res)=>{
                let id = req.body.id;/*Estuve probando con un formulario en Postman. Por eso lo toma del body. En realidad debería tomarlo de "res.locals.userLogged.id". Hay que modificarlo cuando tengamos la vista.*/ 
            try{
                const itemList = await db.Item.findAll({
                    where: {user_id:id, status:0} /*Aquí busca todos los items que no fueron comprados (por ende aún están en el carrito) y que pertenezcan al usuario que está en userLogged.*/ 
                });

                if (itemList.length != 0){ /*Primero revisamos si hay items no comprados. En caso de que haya avanzamos */
                    const total = itemList.map((item)=>{ /*Aqui separa el subtotal de los items (que ya vienen con su respectivo descuento cuando fueron creados) y los suma para obtener el total.*/ 
                        return parseInt(item.price)
                    }).reduce((a,b)=> a+b, 0);
                    
                    const orders = await db.Order.findAll()
                    
                    let orderNumber; /*Aqui generamos un "order_number". Que no es igual al ID. Si no existe el default será 1. Caso contrario se incrementa el úlitmo creado.*/ 
                        if (orders.length != 0){
                            orderNumber = (orders[orders.length-1].order_number)+1
                        } else {
                            orderNumber = 1;
                        };

                    await db.Order.create({ /*Creación de la orden de compra.*/ 
                        order_number: orderNumber,
                        total:total,
                        user_id:1
                    });
                    let newOrder = await db.Order.findOne({where:{order_number:orderNumber}});
                    let orderID = newOrder.id; /*Buscamos la orden nueva según su orderNumber y tomamos la propiedad "id"*/ 
                    
                    let itemsIDs = itemList.map((item)=>{ /*Con ese ID podemos tomar todos los la propiedad .id de los items y guardarlos en un array.*/ 
                        return parseInt(item.id)
                    }) 

                    for (itemID of itemsIDs){ /*Entonces recorriendo ese array podemos usar .update para cambiarles el status de 0 a 1 y ponerles el orderID que poseemos.*/ 
                        await db.Item.update({
                            status:1,
                            order_id:orderID
                        }, {where: {id:itemID, status:0}})
                    }
                    res.json({meta:{status:"Success"}})
                } else {
                    res.json({meta:{status:"No items"}})
                };
           }catch(e){
                res.json(e)    
           }     
        },
        list: async (req,res)=>{
            const id = req.params.id
            const orderList = await db.Order.findAll({
                include: ['items']
              },{where: {user_id:id}});

            res.json({meta:{status:"Success"},data:{orders:orderList}})
        }
    };

module.exports = apisCartsController;