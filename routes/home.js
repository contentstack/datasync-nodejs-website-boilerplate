const express = require('express')
const router = express.Router()
const Stack = require('../models/contentstack')


router.get('/:prefix?', (req, res, next) => {
  const contentTypeUID = 'home'

  Stack.contentType(contentTypeUID).entries()
    .language(req.code)
    .find()
    .then(function success (result) {
      res.render('home.html', {
        home: result
      })
    }).catch(next)
})

module.exports = router
