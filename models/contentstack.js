import { join } from 'path'
const env = process.env.NODE_ENV || 'development'
const config = require(join('..', 'config', env)).config
const Contentstack = require(config.sdk)

const Stack = Contentstack.Stack(config)

Stack.connect(config.contentStore).then(() => {
  console.log("Connected")
}).catch(console.error)

export { Stack }
