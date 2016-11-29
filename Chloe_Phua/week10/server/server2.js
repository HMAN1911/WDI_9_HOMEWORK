//make a new file named about.html and put some crap in there

//hint  - you will need three built in libraries
//http fs and url

var fs = require('fs');
const url = require('url');

var http = require('http');

var file = 'about.html'

http.createServer(function(request,response) {
  if (request.method === 'GET' && request.url === '/') {
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.write('hello world')
    response.end();
  }
  if (request.method === 'GET' && request.url === '/about') {
    fs.readFile(file, function(err, data) {
      if (err) {
      }
      var text = data.toString();
      response.write(text);
      response.end();
    })
    //store in an about.html
  }
  if (request.method === 'GET' && request.url === '/donate') {
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.write('<h1>pls donate</h1>')
    response.end();
  }
  if (request.method === 'GET' && request.url === '/wdi') {
    response.statusCode = 404;
    response.end();
  }
}).listen(8080);

// var app = function(request, response) {
//   // '/' respond hello world
//   // '/about' respond text, store in an about.html
//   // '/donate' respond <h1> pls donate </h1>
//   // '/wdi' respond with http status code 404
//
// }
