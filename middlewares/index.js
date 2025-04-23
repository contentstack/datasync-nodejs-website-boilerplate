const express = require('express')
const helmet = require('helmet');
const app = express();

app.use(helmet());

app.use('*', require('./locales'))
app.use('*', require('./partials'))

module.exports = app
