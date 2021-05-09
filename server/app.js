var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

global.dirname = __dirname

global.hostname = 'http://127.0.0.1:3000'

var indexRouter = require('./routes/index');

var usersRouter = require('./routes/users');

let videosRouter = require('./routes/video')

let utilsRouter = require('./routes/utils')

let clientsideRouter = require('./routes/clientside')

var bodyParser = require('body-parser')

let middleWare = require('./middleWare/intercept');

var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



// 允许跨域
app.all('*', function(req, res, next) {

  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Credentials","true");
  res.header("X-Powered-By",' 3.2.1')

  if(req.method === "OPTIONS"){

    res.sendStatus(200);/*让options请求快速返回*/

  }
  else{

    next();

  }
});
// let cors = require('cors')

// app.use(cors())

middleWare(app)
app.use('/', indexRouter);
app.use('/utils',utilsRouter)
app.use('/clientside',clientsideRouter)
app.use('/users', usersRouter);
app.use('/videos',videosRouter)


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;