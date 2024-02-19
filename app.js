var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose= require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var checkinRouter = require('./routes/in');
var checkoutRouter = require('./routes/out');
var reportRouter = require('./routes/report');

const connect = mongoose.connect("mongodb+srv://prithivi:Prithivi3@cluster0.my8qoin.mongodb.net/WISE");

connect.then((db) => {
  console.log("Connected properly");
}, (err) => { console.log(err); });

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/checkin', checkinRouter);
app.use('/checkout', checkoutRouter);
app.use('/report', reportRouter);

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
