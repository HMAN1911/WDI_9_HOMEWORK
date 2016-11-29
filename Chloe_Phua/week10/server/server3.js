var fs = require('fs')
var url = require('url');


var app = function(request, response) {
  // '/' respond hello world
  var path = url.parse(request.url).pathname;
  console.log(new Date() + path);
  switch(path) {
    case '/':
      response.writeHead(200, {'Content-Type': 'text/html'})
      //can just use response.end if it's just one item
      response.end('hello world');
      break;
    case '/about':
      fs.readFile(__dirname + '/about.html', function(err, data) {
        response.end(data.toString());
      })
      break;
    default:
      response.writeHead(404)
      response.end('oops')
      break;
  }

};
//request and response is the callback signature


var server = require('http').createServer(app);
server.listen(8001);
