'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.partials = undefined;

var _contentstack = require('../models/contentstack');

var _async = require('async');

var partials = exports.partials = function partials(req, res, next) {
  (0, _async.series)([function (callback) {
    // Get Header data
    _contentstack.Stack.contentType('header').entry().find().then(function success(result) {
      callback(null, result);
    }).catch(callback);
  }, function (callback) {
    // Get Footer data
    _contentstack.Stack.contentType('footer').entry().find().then(function success(result) {
      callback(null, result);
    }).catch(callback);
  }], function (error, success) {
    if (error) return next(error);
    res.locals.header = success[0];
    res.locals.footer = success[1];
    next();
  });
};