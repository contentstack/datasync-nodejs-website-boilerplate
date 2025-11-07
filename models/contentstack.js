var path = require('path')
var env = process.env.NODE_ENV || 'development'
var config = require(path.join('..', 'config', env))
var messages = require(path.join('..', 'config', 'messages'))
const Contentstack = require(config.sdk).Contentstack

const Stack = Contentstack.Stack(config)

Stack.connect(config.contentStore).then(() => {
  console.log(messages.success.contentstackConnected)
}).catch(console.error)


module.exports = Stack
