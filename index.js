const dotenv = require('dotenv')
dotenv.config()

const server = require('./api/server.js')


server.get("*", (req, res) => {
    res.status(404).json({ message: "page not found" })
})

server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack
    })
})

const PORT = process.env.PORT || 5000

server.listen(PORT, (req, res) => {
    console.log(`Listening on port ${PORT}`)
})