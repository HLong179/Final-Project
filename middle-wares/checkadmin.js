module.exports=(req,res,next)=>{
    if(req.session.isAdmin === undefined)
    {
        req.session.isAdmin= false;
    }
    res.locals.AdminVM={
        isAdmin: req.session.isAdmin,
    }
    next();
}