import { Router } from 'express'
import { Stack } from '../models/contentstack'
const router = Router();


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

export { router }
