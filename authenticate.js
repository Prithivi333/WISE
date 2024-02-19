exports.verifyAdmin = function (req, res, next) {
    if (req.decoded._doc.admin) {
        next();
    } else {
        var err = new Error('You are not authorized!');
        err.status = 403;
        return next(err);
    }
};