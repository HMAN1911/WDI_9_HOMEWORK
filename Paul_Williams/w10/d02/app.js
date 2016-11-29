var app = require('express')()

app.set('view engine', 'pug')

app.get('/', function(req, res) {
  res.render('index')
})

app.get('/search', function(req, res) {
  res.render('search', req.query)
}

app.listen(3030)
