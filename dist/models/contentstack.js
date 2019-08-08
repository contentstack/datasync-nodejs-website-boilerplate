'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Stack = undefined;

var _path = require('path');

var env = process.env.NODE_ENV || 'development';
var config = require((0, _path.join)('..', 'config', env)).config;
var Contentstack = require(config.sdk).Contentstack;

var Stack = Contentstack.Stack(config);

Stack.connect(config.contentStore).then(function () {
  console.log("Connected");
}).catch(console.error);

exports.Stack = Stack;