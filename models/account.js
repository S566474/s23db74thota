// passport config
// Use the existing connection
// The Account model
var Account =require('./models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());
models/account.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const accountSchema = new Schema({
  username: String,
  password: String,
});

accountSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Account', accountSchema);
