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

    req.session.isLogged = false;
    res.redirect(returnlink);
});

router.get('/register', (req, res) => {
    console.log('render thanh cong');
    res.render('Account/register');
});

router.post('/register', (req, res) => {
    var dob = moment(req.body.date, 'D/M/YYYY').format('YYYY-MM-DD')
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
    account.seachUsername(user).then(rows=>{
        if(rows.length>0){
            console.log('hhihi');
            var vm={
                showErr1:true,
                errorMsg1:'Username exited'
            }
            res.render('Account/register',vm);
        }

    })
    
    
    
        account.add(user).then((value) => {
        console.log('dang ki thanh cong');
        
            req.session.isLogged = true;
            req.session.user = user;
            req.session.cart = []
            res.redirect('/');
      
    });
});
module.exports = router;