const express = require('express')
const router = express.Router()
const Stack = require('../models/contentstack')


router.get('/', (req, res, next) => {
  const contentTypeUID = 'home'

  Stack.contentType(contentTypeUID).entries()
    .find()
    .then(function success (result) {
      res.render('home.html', {
        home: result
      })
    }).catch(next)
})

module.exports = router
