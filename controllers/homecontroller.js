var express= require('express');

var router= express.Router();

var productrepo= require('../reponse/prresp');
var checkadmin= require('../middle-wares/checkadmin')


router.get('/', checkadmin, (req,res)=>{

    productrepo.loadFeatured().then(rows1=>{
        productrepo.loadBestSell().then(rows2=>{
            productrepo.loadNewest().then((rows3)=>{
                var vm ={
                    featured_products: rows1,
                    bestsell_products:rows2,
                    newest_products: rows3,
                }
                
                res.render('./Home/home',vm);
            })
           
        });
    });
  
});
router.get('/productinfo/:prName',(req,res)=>{
    var prName= req.params.prName;

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
  
});
module.exports = router;