var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var task=require('./routes/task_router');
var task1=require('./routes/task_router1');
var student=require('./routes/student_router');
var product=require('./routes/product_router');
var category=require('./routes/category_router');
var usermod=require('./routes/user1');
var usermod1=require('./routes/user2');
var cat=require('./routes/cat_router');
var pro=require('./routes/pro_router');
var cat_pro=require('./routes/cat_pro_router');
var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/todo',task);
app.use('/todo1',task1);
app.use('/product',product);
app.use('/student',student);
app.use('/cat',cat);
app.use('/pro',pro);
app.use('/usermod',usermod);
app.use('/category',category);
app.use('/catpro',cat_pro);
app.use('/usermod1',usermod1);
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
