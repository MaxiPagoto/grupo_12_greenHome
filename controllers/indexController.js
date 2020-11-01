const indexController = {
    index: function (req,res,next){
        res.render('index')
      },
    inspire: function (req,res,next){
        res.render('inspire')
    }
}

module.exports = indexController;