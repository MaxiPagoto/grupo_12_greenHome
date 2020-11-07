const productController = {
    article: function (req,res,next){
        res.render('products/product')
      },
      create: function(req,res, next){
        res.render('products/create')
      }
}
module.exports = productController;