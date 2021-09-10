const express = require('express')
const server = express()
const taskRouter = require('./task/router')
const projectRouter = require('./project/router')
const resourceRouter = require('./resource/router')


server.use(express.json())

server.use('/api/tasks', taskRouter)
server.use('/api/projects', projectRouter)
server.use('/api/resources', resourceRouter)


module.exports = server