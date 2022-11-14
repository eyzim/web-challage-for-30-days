const express = require('express')
const app = express();
const { ModifierFlags } = require('typescript')

const postRoutes = require('./routes/posts')

// parse json responses
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// connect to mongodb through mongoose
const Post = require('./models/post')
const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/project_test")
    .then(() => {
        console.log("Connect to mongo altas successful")
    })
    .catch(() => {
        console.log("Connect to mongo altas fail")
    })

// set header
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Headers",
                    "Origin, x-requested-with, Content-Type, Accept")
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS"
    )
    next()
})

app.use('/api/posts', postRoutes)

module.exports = app
