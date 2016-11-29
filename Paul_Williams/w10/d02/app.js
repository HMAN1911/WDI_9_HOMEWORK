var app = require('express')()
var request = require('request')

app.set('view engine', 'pug')

app.get('/', function(req, res) {
  res.render('index')
})

app.get('/search', function(req, res) {
  request('http://www.omdbapi.com/?s=' + req.query.input, function(err, response, body) {
    if (!err && response.statusCode == 200) {
      res.render('search', JSON.parse(body))
    }
  })
})

app.get('/movie/:id', function(req, res) {
  request('http://www.omdbapi.com/?i=' + req.params.id, function(err, response, body) {
    if (!err && response.statusCode == 200) {
      res.render('movie', JSON.parse(body))
    }
  })
})

app.listen(3030)
