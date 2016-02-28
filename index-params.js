'use strict'
const Hapi = require('hapi')

const server = new Hapi.Server()
server.connection({ port: 8000 })

function handler(request, reply) {
  reply(request.params)
}

/* Less specific */
server.route({
  method: 'GET',
  path: '/{stuff*}',
  handler: handler
})

/* Most specific */
server.route({
    method: 'get',
    path: '/users/{userid?}',
    handler: handler
})

server.route({
    method: 'get',
    path: '/users/{userid}/files',
    handler: handler
})

/* Match */
server.route({
    method: 'GET',
    path: '/files/{files}.jpg',
    handler: handler
})

/* Wildcard */
server.route({
    method: 'GET',
    path: '/files/{files*}',
    handler: handler
})

/* Wildcard fixed */
server.route({
    method: 'GET',
    path: '/folders/{folders*2}',
    handler: handler
})

server.start(() => console.log(`Started at: ${server.info.uri}`))

