var express = require('express');
var router = express.Router();

var csrf =require('csurf');
var passport= require('passport');
var Cart = require('../models/cart');
var Product = require('../models/product');

var csrfProtection = csrf();
router.use(csrfProtection);

router.get('/signin',function(req,res,next) {
    var messages = req.flash('error')
    res.render('user/signin', {
        csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0
    });
});
router.get('/profile', function (req, res, next) {
    res.render('user/profile');
});

router.get('/signup',function(req,res,next){
    var messages =req.flash('error')
    res.render('user/signup',{
        csrfToken:req.csrfToken(),messages:messages,hasErrors:messages.length>0
    });
});

module.exports = router;