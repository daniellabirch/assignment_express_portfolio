const express = require('express');
const app = express();
const {gods} = require('./models/gods');

app.set("view engine", "hbs");

app.get('/', function (request, response) {
  response.render('index', { gods: gods })
})

app.listen(3000, function () {
  // This function is run when the app starts up.
  console.log('Kemst þó hægt fari.')
})

app.get('/gods/:name', function (req, res) {
	const name = req.params.name
	res.send(`Hello ${name}`)
})

// Here we build the router.
var router = express.Router()


// Notice how we're calling get on the router
// rather than on the application
router.get('/', function(req, res, next) {
  res.render('index', { gods: gods })
})

// Finally, we return the router so we can
// use it in our app.js
module.exports = router