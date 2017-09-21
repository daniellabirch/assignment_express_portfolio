const express = require('express');
const app = express();
const port = process.env.PORT || '3000'
//const project = require('projects.js');

app.listen(port)

//app.set('view engine', 'hbs')

app.use(function (req, res, next) {
  //console.log(req.url + " — " + new Date())
  next()
})

app.get('/', function (req, res) {
  res.render('hello')
  //res.render('projects')
})

app.listen(3001, function () {
  console.log('Odin is listening on port 3000!')
})