var express = require('express');
var app = express();
var url = require('url');
var http = require('http')
var port = process.env.PORT || 7000;

app.listen(port, function () {
  console.log('Server listening at port %d', port);
});

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('pages/index');
});

app.get('/results', function(req, res) {

  var options = {
    host: 'omdbapi.com',
    path: '/?s=' + req.query.s
  };

  http.get(options, function(response) {
    var body = '';
    response.on('data', function (chunk) {
      body += chunk;
    });
    response.on('end', function () {
      movies = JSON.parse(body);

      res.render('pages/results', {
        response: movies.Response,
        movies: movies.Search
      });
    });
  }).end();
});

app.get('/about/:id', function(req, res) {

  var options = {
    host: 'omdbapi.com',
    path: '/?i=' + req.params.id
  };

  http.get(options, function(response) {
    var body = '';
    response.on('data', function (chunk) {
      body += chunk;
    });
    response.on('end', function () {
      movie = JSON.parse(body);

      res.render('pages/about', {
        movie: movie
      });
    });
  }).end();
});