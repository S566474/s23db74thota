var express = require('express');
var passport = require('passport');
var router = express.Router();
var Account = require('./models/account') // Change the variable name here

// var door_controlers = require('../controllers/DoorController'); // Assuming you have a controller file

// Landing page
router.get('/', function (req, res) {
  res.render('index', { title: 'Door App', user: req.user });
});

// Registration routes
router.get('/register', function (req, res) {
  res.render('register', { title: 'Door App Registration' });
});

router.post('/register', function (req, res) {
  Account.findOne({ username: req.body.username }) // Change here as well
    .then(function (user) {
      if (user != null) {
        console.log("exists " + req.body.username);
        return res.render('register', { title: 'Registration', message: 'Existing User', account: req.body.username });
      }

      let newAccount = new Account({ username: req.body.username }); // Change here as well
      Acc.register(newAccount, req.body.password, function (err, user) { // Change here as well
        if (err) {
          console.log("db creation issue " + err);
          return res.render('register', { title: 'Registration', message: 'access error', account: req.body.username });
        }

        if (!user) {
          return res.render('register', { title: 'Registration', message: 'access error', account: req.body.username });
        }

        console.log('Success, redirect');
        res.redirect('/');
      });
    })
    .catch(function (err) {
      return res.render('register', { title: 'Registration', message: 'Registration error', account: req.body.username });
    });
});

// Login routes
router.get('/login', function (req, res) {
  res.render('login', { title: 'Door App Login', user: req.user });
});

router.post('/login', passport.authenticate('local'), function (req, res) {
  res.redirect('/');
});

// Logout route
router.get('/logout', function (req, res) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
});

// Ping route
router.get('/ping', function (req, res) {
  res.status(200).send('pong!');
});

// Protected route - Update door page
router.get('/update', ensureAuthenticated, door_controlers.door_update_Page);

// Middleware to ensure authentication
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

module.exports = router;
