const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
app.listen(3000, () => {
    console.log('Server is running on port 3000')
})