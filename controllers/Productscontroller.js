var express= require('express');
var winesrepo = require('../reponse/wineresp');
var router= express.Router();

const URL=require('url').URL;


router.get('/:Id',(req,res)=>{
    
    var Id= req.params.Id;
    //console.log(req.url);
    
    var page = req.query.page;
    if(!page || page<1) page=1;
    var offset= (page-1) *6;


    var p1=winesrepo.LoadbyColor(Id,offset);
    var p2= winesrepo.CountbyColors(Id);
    Promise.all([p1,p2]).then(([rows,count_rows])=>{
        var total= count_rows[0].total;
        var number_pages= total/6;
        if(total%6 >0)
            number_pages++;
        var numbers=[];
        for(i=1;i<= number_pages;i++){
            numbers.push({
                value: i,
                iscurrentpage: i === +page
            });
        }
        var vm={
            products: rows,
            page_numbers: numbers,
            name:'',
           
        }
        if(req.session.isLogged==true){
            vm.name=req.session.user.name;


        }
       
        res.render('./Wine/Products',vm);
    });

});
router.get('/account/signin',(req, res)=>{
    res.redirect(req.url);
})

router.get('/account/signout',(req,res)=>{
  //      console.log(req.url);
//     const returnlink    = new URL(req.headers.referer).pathname;
    
//     req.session.returnlink = returnlink;

//    req.session.isLogged=false;
    res.redirect('/account/signin');

});
module.exports= router;