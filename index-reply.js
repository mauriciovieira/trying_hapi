'use strict'
const Hapi = require('hapi')
const Boom = require('boom')
const server = new Hapi.Server()
server.connection({ port: 8000 })

/* brew install httpie */
/* $ http GET localhost:8000 */
server.route({
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    reply()
  }
})

server.route({
  method: 'GET',
  path: '/idiomatic',
  handler: (request, reply) => {
    reply(null, 'hello world')
  }
})

server.route({
  method: 'GET',
  path: '/not-idiomatic',
  handler: (request, reply) => {
    reply('hello world')
  }
})

server.route({
  method: 'GET',
  path: '/object',
  handler: (request, reply) => {
    reply({hello: 'world'})
  }
})

server.route({
  method: 'GET',
  path: '/promise',
  handler: (request, reply) => {
    reply(Promise.resolve({hello: 'world'}))
  }
})

server.route({
  method: 'GET',
  path: '/stream',
  handler: (request, reply) => {
    reply(require('fs').createReadStream(__filename))
  }
})

server.route({
  method: 'GET',
  path: '/error',
  handler: (request, reply) => {
    reply(new Error('oops'))
  }
})

server.route({
  method: 'GET',
  path: '/boom',
  handler: (request, reply) => {
    reply(Boom.notFound())
  }
})

server.start(() => {})

