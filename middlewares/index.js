import express from 'express'
import { partials } from './partials'

const app = express()
app.use('*', partials)

export { app }
