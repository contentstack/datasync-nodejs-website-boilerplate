const express = require('express')
const app = express();

app.use('*', require('./locales'))
app.use('*', require('./partials'))

module.exports = app
