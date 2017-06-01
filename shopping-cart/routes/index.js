var express = require('express');
var router = express.Router();

var csrf =require('csurf');
var passport= require('passport');
var Cart = require('../models/cart');
var Product = require('../models/product');


var csrfProtection = csrf();
router.use(csrfProtection);
/* GET home page. */

router.get('/user/profile', isLoggedIn, function (req, res, next) {
    res.render('user/profile');
});

//router.use('/user/',notLoggedIn,function(req,res,next){
//   next();
//});

router.get('/', function(req, res, next) {
    Product.find(function(err,docs){
        var productChunks = [];
        var chunkSize =3 ;
        for(var i=0;i<docs.length;i += chunkSize ){
            productChunks.push(docs.slice(i,i+chunkSize));
        }
        res.render('shop/index', { title: 'shopping Cart',products:productChunks });
    });
});

router.get('/user/signup',function(req,res,next){
    var messages =req.flash('error')
    res.render('user/signup',{
        csrfToken:req.csrfToken(),messages:messages,hasErrors:messages.length>0
    });
});
router.post('/signup',passport.authenticate('local.signup',{
    successRedirect:'user/profile',
    failureRedirect:'user/signup',
    failureFlash:true
}));

router.get('/user/signin',function(req,res,next) {
    var messages = req.flash('error')
    res.render('user/signin', {
        csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0
    });
});
router.get('/user/profile', isLoggedIn, function (req, res, next) {
    res.render('user/profile');
});
router.get('/user/logout',isLoggedIn,function(req,res,next){
    req.logout();
    res.redirect('/')
});

router.post('/signin', passport.authenticate('local.signin', {
    successRedirect: 'user/profile',
    failureRedirect: 'user/signin',
    failureFlash: true
}));

router.get('/add-cart/:id',function(req ,res,next){
    var productId = req.params.id;
    var cart =new Cart(req. session.cart ? req.session.cart : {});
    console.log(productId);

    Product.findById(productId,function(err,product){
        if(err){
            return res.redirect('/');
        }

        cart.add(product,product.id);
        console.log('xxxxxxxxxxxx');
        req.session.cart =cart;
        console.log(req.session.cart);
        res.redirect('/');
    });
});

function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/');
}
function notLoggedIn(req,res,next){
    if(!req.isAuthenticated()){
        return next();
    }
    res.redirect('/');
}




module.exports = router;


