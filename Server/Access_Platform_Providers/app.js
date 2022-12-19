var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const cors = require('cors');

//var session = require('express-session');
//var flash = require('connect-flash');


var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://Veena:agile@localhost:500/provider-a?authSource=admin');
require("./models/User");


var index = require('./routes/index');

var app = express();


app.use(cors({
  origin: '*'
}));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/', index);

module.exports = app;
