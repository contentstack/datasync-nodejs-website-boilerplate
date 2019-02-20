var path = require('path')
var env = process.env.NODE_ENV || 'development'
var config = require(path.join('..', 'config', env))
const Contentstack = require(config.sdk).Contentstack

const Stack = Contentstack.Stack(config)

Stack.connect(config.contentStore).then(() => {
  console.log("Connected")
}).catch(console.error)


module.exports = Stack
