var brandrepo= require('../reponse/brandresp');
var colorrepo= require('../reponse/colorresp');
var cartrepo= require('../reponse/cartrepo');

module.exports=(req,res,next)=>{

    if(req.session.isLogged===undefined){
        req.session.isLogged=false;
    }
    brandrepo.LoadBrand().then(rows1=>{
         colorrepo.loadAll().then(rows2=>{
            res.locals.layoutVM={
                brand: rows1,
                color: rows2,
                isLogged:req.session.isLogged,
                curUser:req.session.user,
                sumcart: cartrepo.CountItem(req.session.cart)
            };
            next();
         });
    });
}