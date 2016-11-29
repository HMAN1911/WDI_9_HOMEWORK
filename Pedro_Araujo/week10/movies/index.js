var url = require ('url');
var app = require ('express')();
var http = require ('http');
// var bodyParser = require('body-parser');
const PORT = 3000;

app.set('views', './views/');
app.set('view engine', 'ejs');
// app.use(express.static(__dirname + '/public'));


app.get ('/', function(req, res) {
  res.render('index');
});

// app.get('/search', function(req, res) {
//   var search = req.query
//   var host = "http://omdbapi.com/?s=";
//   var result = (host + search);
//   res.render('search');
// });

app.get('/search', function(req, res) {

  var conf = {
    hostname: 'omdbapi.com',
    path: '/?s=' + req.query.search_title
  };

  http.get(conf, (response) => {
    debugger
    var body = '';
    response.on('data', function (piece) {
      body += piece;
    });
    response.on('end', function () {
      movies = JSON.parse(body);

      res.render('search', {
        response: movies.Response,
        movies: movies.Search
      });
    });
  }).end();
});

// app.get('/movie/' + `${omdbid}`, function(req, res) {
//   res.render('movie');
// });


app.listen(PORT, function () {
  console.log('Example app listening on port' + PORT + '!');
});
