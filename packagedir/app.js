// app.js
var express = require('express')
const app = express()

// And here we go, requiring our router
var index = require('./odin_and_friends/routes/index')

// ...

app.use('/', index)

// ...