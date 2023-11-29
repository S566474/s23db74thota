var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(
  function(username, password, done) {
  Account.findOne({ username: username })
  .then(function (user){
  if (err) { return done(err); }
  if (!user) {
  return done(null, false, { message: 'Incorrect username.' });
  }
  if (!user.validPassword(password)) {
  return done(null, false, { message: 'Incorrect password.' });
  }
  return done(null, user);
  })
  .catch(function(err){
  return done(err)
  })
  })
 )
const mongoose = require('mongoose');
require('dotenv').config();
const connectionString = process.env.MONGO_CON;
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var doorRouter = require('./routes/door');
var boardRouter = require('./routes/board');
var chooseRouter = require('./routes/choose');
var resourceRouter = require('./routes/resource');

const door = require('./models/Door');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//mongo connection
mongoose.connect(connectionString);
var db = mongoose.connection;+
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
  console.log('Connection to DB succeeded');


async function recreateDB(){

 await door.deleteMany();
 
 let instance1 = new door({ door_Name:"French door",door_color:"white",door_height:6});
 let instance2 = new door({ door_Name:"Sliding door",door_color:"blue",door_height:5});
 let instance3 = new door({ door_Name:"Fiberglass door",door_color:"Brown",door_height:6});
 instance1.save().then(doc=>{
 console.log("First object saved")}
 ).catch(err=>{
 console.error(err)
 });
 instance2.save().then(doc=>{
  console.log("Second object saved")}
  ).catch(err=>{
  console.error(err)
  });
  instance3.save().then(doc=>{
    console.log("Third object saved")}
    ).catch(err=>{
    console.error(err)
    });

}

let reseed = true;
if (reseed) {recreateDB();}
  
});



//mongo connection

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
 }));
 app.use(passport.initialize());
 app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));
app.use('/resource', resourceRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/door', doorRouter);
app.use('/board', boardRouter);
app.use('/choose', chooseRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;