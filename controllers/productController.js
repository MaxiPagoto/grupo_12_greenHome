const productController = {
      shop: function (req,res,next){
        res.render('products/detail')
      },    
      article: function (req,res,next){
        res.render('products/detail')
      },
      create: function(req,res, next){
        res.render('products/create')
      },
      store: function(req,res,next){
        res.send('Store');
      },
      cart: function (req,res,next){
        res.render('cart')
      },
      edit:function(req,res,next){
        res.render('products/create', {product:product});},
      save: function(req,res,next){
        res.redirect('/products/detail/:id');},

        tienda:function(req,res,next){
          res.render('products/list');}
        
}
module.exports = productController;