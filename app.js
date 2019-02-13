import { createError } from 'http-errors'
import express from 'express'
import nunjucks from 'nunjucks'
import { routes } from './routes'

const app = express()

//setting view and nunjuks configuration
app.set('view engine', 'html')
nunjucks.configure('views', {
  watch: true,
  autoescape: false,
  express: app
})

app.use(express.json())
app.use(express.urlencoded({
  extended: false
}))

//setting static files
app.use('/static', express.static(`${__dirname}/public`))

//requiring routes
routes(app)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})


export default app 
