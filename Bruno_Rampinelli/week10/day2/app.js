// Build a search form that lets the user enter a movie name. The Sinatra app will use HTTParty to fetch the data for the chosen movie from OMDB and display it on the page.
//
// Build a Sinatra application
// Include:
// app.rb
// views/layout.erb
// views/index.erb
// views/about.erb
// public/css/style.css
// example httparty usage
//
// requrie 'httparty'
// result = HTTParty.get('http://omdbapi.com/?t=once')

var fs = require('fs');
var app = require ('express')();
var fetch = require('node-fetch');

const PORT = 3000;

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/',function(req, res){
  res.render('index')
})

app.post('/result', bodyParser(), function(req,res){

  var result = fetch('http://www.omdbapi.com/?s=' + req.body.movie)
      .then(function(res) { return res.json() })
      .then(function(movies) {
        console.log(movies);
        res.render('result', { movies } )
      })


});

app.post('/result',function(req, res){
  res.render('result')
})

// app.post('/search', bodyParser(), function(req, res){
//   res.send(req.body.movie)
//
// });

app.listen(PORT, function(){
  console.log('example app listening on port ' + PORT + '!');

});
