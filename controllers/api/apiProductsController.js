const db = require('../../database/models/index.js')
const { Op } = require("sequelize")
const Sequelize = require('sequelize')
const urlImages = process.env.URL_IMAGES || 'http://localhost:3000/images/products/';
console.log(process.env.URL_IMAGES)

const apisProductsController = {
  list: async (req,res,next) =>{
    try {
      const productList = await db.Product.findAll({
        include: ['category', 'rooms', 'benefits'],
        order:[['name','ASC']]
      });

      const categories = await db.Category.findAll();

      let countByCategory = [];
      let products = []

/*      
      const group = await db.Product({
      attributes: ['id', [Sequelize.fn('count', Sequelize.col('category_id')), 'category_count']]  
    });
      console.log(group)*/

      for (let category of categories) { 
          let productByCategory = productList.filter(product => product.category.id == category.id)
          countByCategory.push({name:category.name, count: productByCategory.length})
          // > La consigna dice que tiene que ser un objeto. Pero resulta más cómodo hacerlo un array.< 
          //Object.defineProperty(countByCategory, category.id, {value:{name:category.name, count: productByCategory.length},writable:false,configurable:false,enumerable:true})
      }; 
      
      for (let product of productList) {
        products.push({
          id: product.id,
          name:product.name,
          description: product.description,
          category: product.category,
          detail: '/api/products/'+product.id,
          image: urlImages+product.image }
          )
      }
      
      let last = await db.Product.findAll({
        limit: 1,
        order: [[ 'id', 'DESC' ]]
      });

      let lastProduct = {
        id: last[0].id,
        name:last[0].name,
        description: last[0].description,
        category: last[0].category,
        detail: '/api/products/'+last[0].id,
        image: urlImages+last[0].image}




      let data = {
        data: 'Products',
        count: productList.length,
        categories: { data:'Categories', count: categories.length, countByCategory:countByCategory},
        last: lastProduct,
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

      let lastProduct = {
        id: last.id,
        name:last.name,
        description: last.description,
        category: last.category,
        detail: '/api/products/'+last.id,
        image: urlImages+last.image}
        

      return res.json(lastProduct)
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


