var express= require('express');

var router= express.Router();

var productrepo= require('../reponse/prresp');
var checkadmin= require('../middle-wares/checkadmin')

router.get('/', (req,res)=>{

    productrepo.loadFeatured().then(rows1=>{
        productrepo.loadBestSell().then(rows2=>{
            var vm ={
                featured_products: rows1,
                bestsell_products:rows2,
                name: ''
            }
            if(req.session.isLogged == true){
                vm.name = req.session.user.name;
            }
            res.render('./Home/home',vm);
        });
    });
  
});
router.get('/productinfo/:prName',(req,res)=>{
    var prName= req.params.prName;
    productrepo.loadsingle(prName).then(rows=>{
        productrepo.ViewUpdate(prName).then((value)=>{
            var vm={
                products: rows
            }
            res.render('./Home/productinfo',vm);
        })
    })
})




module.exports = router;