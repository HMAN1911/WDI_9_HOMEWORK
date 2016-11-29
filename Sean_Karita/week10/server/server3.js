var fs = require('fs');
var url = require ('url');
var app = function(request, response) {
  // '/' - respond hello world as pure text
  switch(path) {
    case '/':
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('hello world');
    break;

    case '/about':
    fs.readFile( _dirname + '/about.html', function(error, data) {
      response.write(data.toString());
      response.end()
    });

    default:
    response.writeHead(404);
    response.write('oops');
    break;

    response.end();
  }
  console.log(request.url);
  response.end('hello');

  // '/about' - respond text store in a about.html file
  // '/donate' - respond with <h1>please donate</h1>
  // '/wdi' - respond with http status code 404 and text oops
  // turn it into a module
};

var server = require('http').createServer(app);
server.listen(8001);

app.get('/', (request, response) => {
  response.send('hello world');
});
