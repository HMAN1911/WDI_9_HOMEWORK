var app = function(request, response) {
  console.log('cool');
  response.writeHead(200, {
    'Content-Type': 'text/html'
  })
  response.write('<p>bye</p>');
  response.end();
}

var server1 = require('http').createServer(app);
server1.listen(8001);
