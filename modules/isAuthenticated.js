module.exports = function isAuthenticated(req, res, next) {
    if (!req.isAuthenticated()){
        return res.redirect('/users/login');
    }
    next();
}