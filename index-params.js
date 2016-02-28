'use strict'
const Hapi = require('hapi')

const server = new Hapi.Server()
server.connection({ port: 8000 })

function handler(request, reply) {
  reply(request.params)
}

server.route({
    method: 'GET',
    path: '/users/{userId?}',
    handler: handler
  })

server.start(() => console.log(`Started at: ${server.info.uri}`))

