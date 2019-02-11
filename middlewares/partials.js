const async = require('async');
const Stack = require('../models/contentstack');

module.exports = (req, res, next) => {
  async.series([
    callback => {
      // Get Header data
      Stack.contentType('header').entries()
        .find()
        .then(function success (result) {
          callback(null, result);
        }).catch(callback)
    },
    callback => {
      // Get Footer data
      Stack.contentType('footer').entries()
        .find()
        .then(function success (result) {
          callback(null, result);
        }).catch(callback)
    }
  ], (error, success) => {
    if (error) return next(error);
    res.locals.header = success[0];
    res.locals.footer = success[1];
    next();
  })
}
