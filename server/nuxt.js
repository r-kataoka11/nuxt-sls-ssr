const express = require('express')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const { Nuxt, Builder } = require('nuxt')
const nuxtConfig = require('../nuxt.config.js')
const app = express()

const config = {
  ...nuxtConfig,
  dev: false
}

const nuxt = new Nuxt(config)

app.use(awsServerlessExpressMiddleware.eventContext())

app.use(async (req, res) => {
  await nuxt.ready()
  nuxt.render(req, res)
})

module.exports = app
