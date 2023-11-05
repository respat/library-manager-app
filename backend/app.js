require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 3000

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected'))

app.use(express.json())

const usersRouter = require('./routes/users')

app.use('/users', usersRouter)

app.listen(port, () => {
    console.log('Listening on port 3000')
})