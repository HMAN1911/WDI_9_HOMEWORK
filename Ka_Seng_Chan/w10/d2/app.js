var express = require('express');
var app = express();

var http = require('http');

var bodyParser = require('body-parser');

var PORT = 3000;

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', function(req,res) {
  res.render('index');
});


app.get('/find', function(req,res) {
  var title = req.query.title;
  // console.log(title);
  var options = {
    host: 'www.omdbapi.com',
    path: '/?s=' + title
  };

  var req = http.get(options, function(response) {
    var str = '';
    //another chunk of data has been recieved, so append it to `str`
    response.on('data', function (chunk) {
      str += chunk;
    });
    //the whole response has been recieved, so we just print it out here
    response.on('end', function () {
      var results = JSON.parse(str);
      console.log(results);
      res.render('find', results);
    });
  }).end();
});


app.get('/about/:imdbID', function(req,res) {
  var imdbID = req.params.imdbID;
  var options = {
    host: 'www.omdbapi.com',
    path: '/?i=' + imdbID
  };

  var req = http.get(options, function(response) {
    var str = '';
    //another chunk of data has been recieved, so append it to `str`
    response.on('data', function (chunk) {
      str += chunk;
    });
    //the whole response has been recieved, so we just print it out here
    response.on('end', function () {
      var movie = JSON.parse(str);
      // console.log(movie);
      res.render('about', movie);
    });
  }).end();
});

app.listen(PORT, function() {
  console.log('Example app listening on port ' + PORT + '!');
});
