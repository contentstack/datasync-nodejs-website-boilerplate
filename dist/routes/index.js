'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = undefined;

var _middlewares = require('../middlewares');

var _home = require('./home');

var routes = function routes(app) {
  app.use('/', _middlewares.app);
  app.use('/', _home.router);
};

exports.routes = routes;