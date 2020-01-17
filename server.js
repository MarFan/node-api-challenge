const express = require('express');
const cors = require('cors')

const actionRouter = require('./actions/actionRouter');
const projectRouter = require('./project/projectRouter');

const server = express();
server.use(express.json())
server.use(cors());

server.get('/', (req, res) => {
    res.send('<h2>Let\'s get started!</h2>')
})

// add routes
server.use('/api/actions', actionRouter)
server.use('/api/projects', projectRouter)

module.exports = server;