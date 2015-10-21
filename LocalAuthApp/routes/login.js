var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;



router.use(passport.initialize());
router.use(passport.session());

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

passport.use(new LocalStrategy(function(username, password, done) {
    process.nextTick(function() {
        UserDetails.findOne({
            'username': username,
        }, function(err, user) {
            if (err) {return done(err);}
            if (!user) {return done(null, false);}
            if (user.password != password) {return done(null, false);}
            return done(null, user);
        });
    });
}));



/* GET */
router.get('/', function(req, res, next) {
    res.render('login.ejs');
});

/* POST */
router.post('/',
    passport.authenticate('local', {
        successRedirect: 'loginSuccess',
        failureRedirect: 'loginFailure'
    })
);

module.exports = router;
