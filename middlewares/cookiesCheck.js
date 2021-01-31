function cookiesCheck(req,res,next) {
    if (req.cookies.userLogged !== undefined) {
        req.session.userLogged = req.cookies.userLogged;}
        next();
};

module.exports = cookiesCheck