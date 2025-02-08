function requireAuth(req, res, next) {
    if (!req.session.userId) {
        const error = new Error('Unauthorized');
        error.status = 401;
       next(error);
    }
    next();
}
module.exports = requireAuth