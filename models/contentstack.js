var path = require('path')
var env = process.env.NODE_ENV || 'development'
var config = require(path.join('..', 'config', env))
const Contentstack = require(config.sdk)

const Stack = Contentstack.Stack(config)

Stack.connect(config['content-connector']).then(() => {
  console.log("Connected")
}).catch(console.error)


module.exports = Stack
