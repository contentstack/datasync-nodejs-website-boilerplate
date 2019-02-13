import { Stack } from '../models/contentstack'
import { series } from 'async'

export const partials = (req, res, next) => {
  series([
    callback => {
      // Get Header data
      Stack.contentType('header').entry()
        .find()
        .then(function success (result) {
          callback(null, result)
        }).catch(callback)
    },
    callback => {
      // Get Footer data
      Stack.contentType('footer').entry()
        .find()
        .then(function success (result) {
          callback(null, result)
        }).catch(callback)
    }
  ], (error, success) => {
    if (error) return next(error)
    res.locals.header = success[0]
    res.locals.footer = success[1]
    next()
  })
}
