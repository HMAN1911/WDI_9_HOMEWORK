var express = require('express');
var app = express();
// var app = require ('express')();
var fetch = require('node-fetch')

// var app = express();
var PORT = 3000;
//middleware
//before you get your response back, it goes through different apps - these are middleware
//logger is a middleware
var bodyParser = require('body-parser');

app.set('views','./views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// app.use(bodyParser.urlencoded({extended: false}))

app.get('/', function(req, res) {

  //on my index i want to display a form
  res.render('index')

});

app.listen(PORT, function() {
  console.log('example app listening on port' + PORT +' !')
});

app.post('/results', bodyParser(), function(req, res) {
  fetch('http://omdbapi.com/?s=' + req.body.title)
    .then(function(res) {
        return res.json();
    }).then(function(json) {
      results = [];
      for (var i = 0; i < json.Search.length; i++) {
        var result = json.Search[i];
        if (result) {
          results.push(result);
          console.log(result)
        }
      }
      res.render('results', {searchresults: results});
    });
});

app.get('/movie/:id', function(req, res) {
  fetch('http://omdbapi.com/?i='+req.params.id)
    .then(function(res) {
      return res.json();
    }).then(function(json) {
      res.render('movie', {moviedetails: json});
    })
});

//find out how to add another route and show a template but use
// a different templating engine - like pug

//
