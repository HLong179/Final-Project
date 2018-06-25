var express = require('express');
var SHA256 = require('crypto-js/sha256');
var moment = require('moment');
var account = require('../reponse/account');


const URL = require('url').URL;

var router = express.Router();

var account = require('../reponse/account');

router.get('/signin', (req, res) => {

    const returnlink = new URL(req.headers.referer).pathname;

    req.session.returnlink = returnlink;

    res.render('Account/sign-in');
});

router.post('/signin', (req, res) => {
    var user = {
        username: req.body.username,
        // password:SHA256(req.body.password).toString()
        password: req.body.password
    };
     
    account.login(user).then(rows => {
        if (rows.length > 0) {
           
            req.session.isLogged = true;
            req.session.user = rows[0];
            var check= req.session.user.permission;
            if(check == 1)
            {
                req.session.isAdmin= true;
                console.log(req.session.isAdmin);
            }
            req.session.cart = []
            // console.log(rows[0]);
            // console.log('logn in thanh congs');
            var url = '/';
            if (req.query.retUrl) {
                url = req.query.retUrl;
            }
            let returnlink = req.session.returnlink;
            res.redirect(returnlink);
        }
        else {
            var vm = {
                showError: true,
                errorMsg: 'Please check your username and password'
            };
            res.render('Account/sign-in', vm);
        }
    });
});

router.get('/signout', (req, res) => {
    const returnlink = new URL(req.headers.referer).pathname;

    req.session.returnlink = returnlink;
    req.session.isAdmin=false;
    req.session.isLogged = false;
    res.redirect(returnlink);
});

router.post('/signout', (req, res) => {
    const returnlink = new URL(req.headers.referer).pathname;

    req.session.returnlink = returnlink;

    req.session.isLogged = false;
    res.redirect(returnlink);
});

router.get('/register', (req, res) => {
    console.log('render thanh cong');
    res.render('Account/register'); 
});

router.post('/register', (req, res) => {
    var dob = moment(req.body.date, 'DD-MM-YYYY').format('YYYY/MM/DD')
    var user = {
        username: req.body.username1,
        password: req.body.password1,
        confpass:req.body.confpassword,
        name: req.body.fullname,
        email: req.body.email,
        phone: req.body.phone,
        dob: dob,
        permission: 0
    };
    //var flag=true;
    
    account.seachUsername(user).then(rows=>{
        if(rows.length<=0){
            account.searchEmail(user).then(rows=>{
                if(rows.length<=0){
                    account.add(user).then((value) => {
                        console.log('REgister success');
                            req.session.isLogged = true;
                            req.session.user = user;
                            req.session.cart = []
                            res.redirect('/');
                    });            

                    
                }else{
                    console.log('email founded');
                    var vm={
                        showErr2:true,
                        errorMsg2:'Email registered.'
                    }
                    res.render('Account/register',vm);
                }  
            })
        }else{
            console.log('đã trùng');
            var vm={
                showErr1:true,
                errorMsg1:'Username exited'
            }

            res.render('Account/register',vm);
        }

    })
       
      
});
router.get('/profile',(req,res)=>{
    console.log('rendered Account/profile');
    if(req.session.isLogged==true){
        console.log('account logged in');
    var dob = moment(req.session.user.dob).format('DD/MM/YYYY')
        
        var vm={
            username:req.session.user.username,
            name:req.session.user.name,
            email:req.session.user.email,
            phone:req.session.user.phone,
            dob:dob
        }
        console.log(vm);
       // vm.name=req.session.user.name;   
    }
    //console.log(vm.name);
    res.render('Account/profile',vm);
});

router.post('/update',(req,res)=>{
    //var dob = moment(req.body.dob, 'D/M/YYYY').format('YYYY-MM-DD')
    
    var user={
        id:req.session.user.acc_id,
        name:req.body.name,
        phone:req.body.phone,
        dob:moment(req.body.dob,'D/M/YYYY').format('YYYY/MM/DD')
    }
    console.log(user);
    console.log(req.body.dob);
    account.updateInfor(user);
    req.session.user.name=user.name;
    req.session.user.dob=user.dob;
    req.session.user.phone=user.phone;
    res.redirect('/');
    
});


router.post('/changepass',(req,res)=>{
    console.log(req.body);
    var user={
        id:req.session.user.acc_id,
        password:req.body.pass
    }
    console.log(user.id);
    console.log(user.password);
    account.updatePassword(user);
    res.redirect('/signout');
    
});

module.exports = router;