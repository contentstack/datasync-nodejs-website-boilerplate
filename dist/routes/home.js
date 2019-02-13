'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = undefined;

var _express = require('express');

var _contentstack = require('../models/contentstack');

var router = (0, _express.Router)();

router.get('/', function (req, res, next) {
  var contentTypeUID = 'home';

  _contentstack.Stack.contentType(contentTypeUID).entries().find().then(function success(result) {
    res.render('home.html', {
      home: result
    });
  }).catch(next);
});

exports.router = router;