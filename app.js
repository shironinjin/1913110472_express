var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const config = require('./config/index')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var companiesRouter = require("./routes/company");
var staffRouter = require("./routes/staff");
var shopRouter = require("./routes/shop");

var app = express();

mongoose.connect(config.MONGODB_URI,{useNewUrlParser: true, useUnifiedTopology: true});

app.use(logger('dev'));
app.use(express.json({
    limit:'50mb'
}));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use("/company", companiesRouter);
app.use("/staff", staffRouter);
app.use("/shop", shopRouter);
module.exports = app;