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
  handler: function (request, reply) {
    let resp = reply('hello world')
  }
})

/* $ http GET localhost:8000/teapot */
server.route({
  method: 'GET',
  path: '/teapot',
  handler: function (request, reply) {
    let resp = reply('hello world')
    resp.code(418)
  }
})

/* $ http GET localhost:8000/teapot/plain */
server.route({
  method: 'GET',
  path: '/teapot/plain',
  handler: function (request, reply) {
    let resp = reply('hello world')
    resp.code(418)
    resp.type('text/plain')
  }
})

/* $ http GET localhost:8000/teapot/plain/world */
server.route({
  method: 'GET',
  path: '/teapot/plain/{hello}',
  handler: function (request, reply) {
    let resp = reply('hello world')
    resp.code(418)
    resp.type('text/plain')
    resp.header('hello', request.params.hello)
  }
})

/* $ http GET localhost:8000/teapot/cookie/world */
server.route({
  method: 'GET',
  path: '/teapot/cookie/{hello}',
  handler: function (request, reply) {
    let resp = reply('hello world')
    resp.code(418)
    resp.type('text/plain')
    resp.header('hello', request.params.hello)
    resp.state('hello', request.params.hello)
  }
})

/* $ http GET localhost:8000/teapot/chain/world */
server.route({
  method: 'GET',
  path: '/teapot/chain/{hello}',
  handler: function (request, reply) {
    reply('hello world')
      .code(418)
      .type('text/plain')
      .header('hello', request.params.hello)
      .state('hello', request.params.hello)
  }
})
server.start(() => {})

