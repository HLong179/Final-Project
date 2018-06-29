var express = require('express');
var bodyParser = require('body-parser');
var SHA256 = require('crypto-js/sha256');
var moment = require('moment');
var account = require('../reponse/account');
var handlelayout= require('../middle-wares/handle_layouts');
var restrict= require('../middle-wares/restrict');
//var request = require('request');


var router = express.Router();

var account = require('../reponse/account');

router.get('/signin', (req, res) => {

    res.render('Account/sign-in');
});

router.post('/signin', (req, res) => {
    var user = {
        username: req.body.username,
        password: SHA256(req.body.password).toString()
    };

    account.login(user).then(rows => {
        if (rows.length > 0) {

            req.session.isLogged = true;
            req.session.user = rows[0];
            var check = req.session.user.permission;
            if (check == 1) {
                req.session.isAdmin = true;
            }
            req.session.cart = [];
            var url = '/';
            if (req.query.retUrl) {
                url = req.query.retUrl;
            }
            res.redirect(url);
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
    req.session.isLogged= false;
    req.session.User= null;
    req.session.isAdmin=false;
    res.locals.layoutVM.isLogged= false;
    res.redirect('../account/signin');
});
router.get('/register', (req, res) => {
    res.render('Account/register');
});  
router.post('/register', (req, res) => {


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


    account.seachUsername(user).then(rows => {
        if (rows.length <= 0) {
            account.searchEmail(user).then(rows => {
                if (rows.length <= 0) {
                    account.add(user).then((value) => {
                        console.log('REgister success');
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
router.get('/profile',restrict, (req, res) => {
    
        var dob = moment(req.session.user.dob).format('DD/MM/YYYY')

        var vm = {
            username: req.session.user.username,
            name: req.session.user.name,
            email: req.session.user.email,
            phone: req.session.user.phone,
            dob: dob
        }
    res.render('Account/profile', vm);
});

router.post('/update', (req, res) => {

    var user = {
        id: req.session.user.acc_id,
        name: req.body.name,
        phone: req.body.phone,
        dob: moment(req.body.dob, 'D/M/YYYY').format('YYYY/MM/DD')
    }
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
    account.updatePassword(user);
    res.redirect('/account/signout');

});

module.exports = router;