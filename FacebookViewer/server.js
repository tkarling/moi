var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

// passport specific setup
var session = require('express-session');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var keys = require('./keys.js');

var FACEBOOK_APP_ID = keys.FACEBOOK_APP_ID;
var FACEBOOK_APP_SECRET = keys.FACEBOOK_APP_SECRET;

var app = express();
var port = 3039;

// MIDDLEWARE
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());

app.use(session({
    secret: 'some-random-string'
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json()); 

passport.use(new FacebookStrategy({
  clientID: FACEBOOK_APP_ID,
  clientSecret: FACEBOOK_APP_SECRET,
  callbackURL: 'http://localhost:' + port + '/auth/facebook/callback'
}, function(token, refreshToken, profile, done) {
    console.log("profile: ", profile);
  return done(null, profile);
}));


app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/auth/Facebook'
  }), function(req, res) {
    console.log(req.session);
  });

// Passport session setup.
passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    done(null, obj);
});

app.get('/me', function(req, res) {
        console.log("me");
    	res.send(req.user);
        // res.send("hello");
    });

app.get('/me2', function(req, res) {
        console.log("me2");
        res.send(req.user);
        // res.send("hello");
    });

var server = app.listen(port, function() {
    console.log("Listening at address", server.address());
});

