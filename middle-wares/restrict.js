module.exports = (req, res, next) => {
    if (req.session.isLogged === true) {
        console.log('successed login');
        next();
    } else {
        res.redirect(`/account/signin?retUrl=${req.originalUrl}`);
    }
}

