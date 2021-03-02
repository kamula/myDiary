const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const connectDB = require('./config/db')

// load env vars
dotenv.config({ path: './config/config.env' })

// connect to db
connectDB()

const app = express()

const PORT = process.env.PORT
const server = app.listen(PORT, console.log(`app listening on port ${PORT}`.yellow.bold))