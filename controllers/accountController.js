var express = require('express');
var bodyParser = require('body-parser');
var SHA256 = require('crypto-js/sha256');
var moment = require('moment');
var account = require('../reponse/account');
//var request = require('request');

const URL = require('url').URL;

var router = express.Router();

var account = require('../reponse/account');

router.get('/signin', (req, res) => {

    // const returnlink = new URL(req.headers.referer).pathname;

    // req.session.returnlink = returnlink;

    res.render('Account/sign-in');
});

router.post('/signin', (req, res) => {
    var user = {
        username: req.body.username,
        // password:SHA256(req.body.password).toString()
        password: SHA256(req.body.password).toString()
    };

    account.login(user).then(rows => {
        if (rows.length > 0) {

            req.session.isLogged = true;
            req.session.user = rows[0];
            var check = req.session.user.permission;
            if (check == 1) {
                req.session.isAdmin = true;
                console.log(req.session.isAdmin);
            }
            req.session.cart = []
            // console.log(rows[0]);
            // console.log('logn in thanh congs');
            // var url = '/';
            if (req.query.retUrl) {
                url = req.query.retUrl;
            }
            let returnlink = req.session.returnlink;
            res.redirect('/');
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

    //    req.session.returnlink = returnlink;
    req.session.isAdmin = false;
    req.session.isLogged = false;
    //req.session.user={};
    //req.session.destroy();
    //res.redirect('/');

    //  //console.log(req.session);
    res.redirect('/account/signin');
});

// router.post('/signout', (req, res) => {
//     // const returnlink = new URL(req.headers.referer).pathname;

//     // req.session.returnlink = returnlink;

//      req.session.isLogged = false;
//  

// });

router.get('/register', (req, res) => {
    console.log('render thanh cong');
    res.render('Account/register');
});

// router.post('/register', (req, res) => {
//     var dob = moment(req.body.date, 'DD-MM-YYYY').format('YYYY/MM/DD')
//     var user = {
//         username: req.body.username1,
//         password: SHA256(req.body.password1).toString(),
//         confpass:SHA256(req.body.confpassword).toString(),
//         name: req.body.fullname,
//         email: req.body.email,
//         phone: req.body.phone,
//         dob: dob,
//         permission: 0
//     };
//     //var flag=true;

//     account.seachUsername(user).then(rows=>{
//         if(rows.length<=0){
//             account.searchEmail(user).then(rows=>{
//                 if(rows.length<=0){
//                         account.add(user).then((value) => {
//                         console.log('REgister success');
//                             // req.session.isLogged = true;
//                             // req.session.user = user;
//                             // req.session.cart = []
//                             res.redirect('/account/signin');
//                     });            


//                 }else{
//                     console.log('email founded');
//                     var vm={
//                         showErr2:true,
//                         errorMsg2:'Email registered.'
//                     }
//                     res.render('Account/register',vm);
//                 }  
//             })
//         }else{
//             console.log('đã trùng');
//             var vm={
//                 showErr1:true,
//                 errorMsg1:'Username exited'
//             }

//             res.render('Account/register',vm);
//         }

//     })


// });



router.post('/register', (req, res) => {


    // if (req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null) {


    //      res.send({ "responseCode": 1, "responseDesc": "Please select captcha" });
    // }

    // var secretKey = "6LfVD2EUAAAAAMCpjKUvxRWisxRFQ3YYDqKKKF6F";
    // var verificationUrl = "https://www.google.com/recaptcha/api/siteverify?secret=" + secretKey + "&response=" + req.body['g-recaptcha-response'] + "&remoteip=" + req.connection.remoteAddress;
    // request(verificationUrl, function (error, response, body) {
    //     body = JSON.parse(body);
    //     if (body.success !== undefined && !body.success) {
    //        res.send({ "responseCode": 1, "responseDesc": "Failed captcha verification" });
    //     }
    //     res.send({ "responseCode": 0, "responseDesc": "Sucess" });
    // });


    var dob = moment(req.body.date, 'DD-MM-YYYY').format('YYYY/MM/DD')
    var user = {
        username: req.body.username1,
        password: SHA256(req.body.password1).toString(),
        confpass: SHA256(req.body.confpassword).toString(),
        name: req.body.fullname,
        email: req.body.email,
        phone: req.body.phone,
        dob: dob,
        permission: 0
    };
    //var flag=true;

    account.seachUsername(user).then(rows => {
        if (rows.length <= 0) {
            account.searchEmail(user).then(rows => {
                if (rows.length <= 0) {
                    account.add(user).then((value) => {
                        console.log('REgister success');
                        // req.session.isLogged = true;
                        // req.session.user = user;
                        // req.session.cart = []
                        res.redirect('/account/signin');
                    });


                } else {
                    console.log('email founded');
                    var vm = {
                        showErr2: true,
                        errorMsg2: 'Email registered.'
                    }
                    res.render('Account/register', vm);
                }
            })
        } else {
            console.log('đã trùng');
            var vm = {
                showErr1: true,
                errorMsg1: 'Username exited'
            }

            res.render('Account/register', vm);
        }

    })


});
router.get('/profile', (req, res) => {
    console.log('rendered Account/profile');
    if (req.session.isLogged == true) {
        console.log('account logged in');
        var dob = moment(req.session.user.dob).format('DD/MM/YYYY')

        var vm = {
            username: req.session.user.username,
            name: req.session.user.name,
            email: req.session.user.email,
            phone: req.session.user.phone,
            dob: dob
        }
        console.log(vm);
        // vm.name=req.session.user.name;   
    }
    //console.log(vm.name);
    res.render('Account/profile', vm);
});

router.post('/update', (req, res) => {
    //var dob = moment(req.body.dob, 'D/M/YYYY').format('YYYY-MM-DD')

    var user = {
        id: req.session.user.acc_id,
        name: req.body.name,
        phone: req.body.phone,
        dob: moment(req.body.dob, 'D/M/YYYY').format('YYYY/MM/DD')
    }
    console.log(user);
    console.log(req.body.dob);
    account.updateInfor(user);
    req.session.user.name = user.name;
    req.session.user.dob = user.dob;
    req.session.user.phone = user.phone;
    res.redirect('/');

});


router.post('/changepass', (req, res) => {
    console.log(req.body);
    var user = {
        id: req.session.user.acc_id,
        password: SHA256(req.body.pass).toString()
    }
    console.log(user.id);
    console.log(user.password);
    account.updatePassword(user);
    res.redirect('/account/signout');

});

module.exports = router;