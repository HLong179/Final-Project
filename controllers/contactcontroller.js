var express= require('express');
var router= express.Router();

router.get('/', (req,res)=>{
    var vm={
        name:''
    }
    if(req.session.isLogged==true){
        vm.name=req.session.user.name;
    }
    res.render('./Contact/contact',vm);
});

module.exports= router;