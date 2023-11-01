const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello')
})

app.get('/user', (req, res) => {
    res.send('User')
})

app.listen(port, () => {
    console.log('Listening on port 3000')
})