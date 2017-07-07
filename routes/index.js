var express = require('express');
var router = express.Router();
var User = require('../model/user');
//var passport = require(passport);

module.exports = function(passport){

/* GET home page. */
    router.get('/', function(req, res, next) {
      res.render('index', { title: 'Express' });
    });

    router.get('/login', function(req, res, next) {
        res.render('login', {title: 'Login'});
    });

    router.get('/register', function(req, res, next) {
        res.render('register', {title: 'Register'});
    });
    
    router.get('/dashboard', function(req, res, next) {
        res.render('dashboard', {title: 'Dashboard'});
    });

    router.post('/login',
                passport.authenticate('local-login',{failureRedirect: '/login'}),
                function(req, res, next) {
        console.log(req.user);
        console.log(req.body);
        console.log(req.isAuthenticated());
        console.log(req.session);
        req.session.cookie.maxAge = 30 * 24 *60*60*1000;
        res.redirect('/dashboard');
    });

    router.post('/register', function(req, res, next) {
        User.findOne({'user':req.body.username}, function(err,user){
            if(err){
                throw err;
            }
            if(user){
                return "User Exists";
            }
            else{
                var newUser = new User();
                newUser.email = req.body.email;
                newUser.password = req.body.password;
                newUser.user = req.body.username;
                newUser.save(function(err,saveUser){
                    if(err){
                        throw err;
                    }
                    console.log(saveUser);
                    res.redirect('/login');
                });

            }

        }) 

    });

    
    return router;
}


