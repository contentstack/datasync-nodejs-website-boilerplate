const createError = require('http-errors')
const express = require('express')
const logger = require('morgan')
const rateLimit = require('express-rate-limit')
const app = express()
const nunjucks = require('nunjucks')
const helmet = require('helmet')
const path = require('path')
const messages = require(path.join(__dirname, 'config', 'messages'))

app.use(helmet());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: messages.errors.rateLimitExceeded,
  standardHeaders: true,
  legacyHeaders: false,
})
app.use(limiter)

//setting view and nunjuks configuration
app.set('view engine', 'html')
nunjucks.configure('views', {
  watch: true,
  autoescape: false,
  express: app
})

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({
  extended: false
}))

//setting static files
app.use('/static', express.static(`${__dirname}/public`))

//requiring routes
require('./routes')(app)

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

module.exports = app
