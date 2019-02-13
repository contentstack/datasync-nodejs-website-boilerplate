import { app as middlewares } from '../middlewares'
import { router as home } from './home'

const routes = (app) => {
  app.use('/', middlewares)
  app.use('/', home)
}

export { routes }
