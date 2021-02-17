const db = require('../../database/models/index.js')
const { Op } = require("sequelize")




const apisProductsController = {
  list: async (req,res,next) =>{
    try {
      const productList = await db.Product.findAll({
        include: ['category', 'rooms', 'benefits']
      });

      const categories = await db.Category.findAll();

      let countByCategory = {};
      let products = []

      for (let category of categories) { 
          let productByCategory = productList.filter(product => product.category.id == category.id)
          Object.defineProperty(countByCategory, category.id, {value:{name:category.name, count: productByCategory.length},writable:false,configurable:false,enumerable:true})
      }; 
      
      for (let product of productList) {
        products.push({
          id: product.id,
          name:product.name,
          description: product.description,
          category: product.category,
          detail: '/api/products/'+product.id}
          )
      }

      let data = {
        count: productList.length,
        countByCategory: countByCategory,
        products:products
      }
      return res.json(data)
    } catch {
      return res.json({
        status:'failed'
    })
    }
  },
  last: async (req,res,next) => {
    try {
      const productList = await db.Product.findAll({
        include: ['category', 'rooms', 'benefits']
      });

      let last = productList[productList.length-1]
      return res.json(last)
    } catch {
      return res.json({
        status:'failed'
    })
    }
  },
  detail: async (req,res,next) => {
    try{
      const productoSQL = await db.Product.findByPk(req.params.id,{
        include: ['category', 'rooms', 'benefits']})
      
        return res.json(productoSQL)
    } catch {
      return res.json({
        status:'failed' 
      })
    }
  }
}



module.exports = apisProductsController;


