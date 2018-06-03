var express= require('express');
var router= express.Router();

router.get('/', (req,res)=>{
    res.render('./Contact/contact');
})

module.exports= router;