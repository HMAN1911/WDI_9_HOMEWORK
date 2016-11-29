var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fetch = require('node-fetch');
var PORT = 3000;

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index');
})

app.get('/search', function(req, res) {
  var term = req.query.term
  fetch('http://omdbapi.com/?s=' + term)
  .then(function(resolve) {
    return resolve.json();
  })
  .then(function(json) {
    res.send(json);
  })
})

app.get('/movie', function(req, res) {
  var imdbID = req.query.imdbID
  fetch('http://www.omdbapi.com/?i=' + imdbID + '&plot=short&r=json')
  .then(function(resolve) {
    return resolve.json();
  })
  .then(function(json) {
    res.send(json);
  })
})

app.listen(PORT, function () {
  console.log('Example app listening on port ' + PORT +'!');
})
