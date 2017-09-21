const express = require('express');
const app = express();
const {projects} = require('./models/projects');

app.set("view engine", "hbs");

app.get('/', function (request, response) {
  response.render('index', { projects: projects })
})

app.listen(3000, function () {
  // This function is run when the app starts up.
  console.log('app is running')
})

app.get('/project/:name', function (req, res) {
	const name = req.params.name
	res.send(`This is the page for ${name}`)
})

// Here we build the router.
var router = express.Router()


// Notice how we're calling get on the router
// rather than on the application
router.get('/', function(req, res, next) {
  res.render('index', { projects: projects })
})

// Finally, we return the router so we can
// use it in our app.js
module.exports = router