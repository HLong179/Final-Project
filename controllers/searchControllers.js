var express= require('express');
var router= express.Router();
var Searchrepo= require('../reponse/searchrepo');

router.post('/',(req,res)=>{
    var string= req.body.search;
    Searchrepo.SearchProduct(string).then((_Products)=>{
        Searchrepo.SearchProducer(string).then((_Brands)=>{
            Searchrepo.SearchColor(string).then((_Colors)=>{
                var vm={
                    Products: _Products,
                    Brands: _Brands,
                    Colors: _Colors,
                    ping: string
                }
                res.render('search/index',vm);
            })
        })
    })
})


module.exports= router;