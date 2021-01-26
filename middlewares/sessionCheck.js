function sessionCheck(req,res,next) {
    if (req.session.userLogged) {
        res.locals.userLocal =req.session.userLogged;
    }else{
        res.locals.userLocal = undefined

        }
        next();
};

module.exports = sessionCheck;