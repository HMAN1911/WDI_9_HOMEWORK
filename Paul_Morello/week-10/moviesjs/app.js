var bodyparser = require('body-parser')
var app = require('express')();
var fetch = require('node-fetch');
var PORT = 3000; // constant

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index');
});

app.post('/search', bodyparser(), function(req, res) {

  var result = fetch('http://www.omdbapi.com/?s=' + req.body.movie)
    .then(function(res) { return res.json() })
    .then(function(movies) {
      console.log(movies);
      res.render('search', { movies } )
    })
});

app.get('/about/:name', bodyparser(), function(req, res) {

  console.log(req.params.name);

  var result = fetch('http://www.omdbapi.com/?t=' + req.params.name)
    .then(function(res) { return res.json() })
    .then(function(movie) {
      console.log(movie);
      res.render('about', { movie } )
    })

});

app.listen(3000, function () {
  console.log('Example app listening on port ' + PORT + '!');
});
