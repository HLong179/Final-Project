var express= require('express');

var router= express.Router();

var productrepo= require('../reponse/prresp');
var checkadmin= require('../middle-wares/checkadmin')


router.get('/', checkadmin, (req,res)=>{

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
    // var p1=productrepo.loadsingle(prName);
    // var p2=productrepo.ViewUpdate(prName);
    // var p3=productrepo.FindSimilarProducer(prName);
    // Promise.all([p1,p2,p3]).then((rows,row1s,row2s)=>{
    //     var vm={
    //         products:rows,
    //         similarProducer:row2s
    //     }
    //     res.render('./Home/productinfo',vm);

    // });

    productrepo.loadsingle(prName).then(rows=>{
        productrepo.ViewUpdate(prName).then((value)=>{
            productrepo.FindSimilarProducer(prName).then(row1s=>{
                productrepo.FindSimilarBrand(prName).then(row2s=>{
                    var vm={
                        products:rows,
                        similarProducer:row1s,
                        similarBrand:row2s
                    }
                    res.render('./Home/productinfo',vm);
                })
            })
        })
    });
  


    
    // productrepo.loadsingle(prName).then(rows=>{
    //     productrepo.ViewUpdate(prName).then((value)=>{
    //         var vm={
    //             products: rows
    //         }
    //         res.render('./Home/productinfo',vm);
    //     })
    // })
});
module.exports = router;