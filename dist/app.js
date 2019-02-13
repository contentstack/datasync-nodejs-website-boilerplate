'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _httpErrors = require('http-errors');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _nunjucks = require('nunjucks');

var _nunjucks2 = _interopRequireDefault(_nunjucks);

var _routes = require('./routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

//setting view and nunjuks configuration
app.set('view engine', 'html');
_nunjucks2.default.configure('views', {
  watch: true,
  autoescape: false,
  express: app
});

app.use(_express2.default.json());
app.use(_express2.default.urlencoded({
  extended: false
}));

//setting static files
app.use('/static', _express2.default.static(__dirname + '/public'));

//requiring routes
(0, _routes.routes)(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next((0, _httpErrors.createError)(404));
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

exports.default = app;