// app is just a callback function
// request, response - callback signature

var app = function(request, response) {
  console.log('cool');
  response.writeHead(200, {'Content-type': 'text/html' });
  response.write('bye');
  response.end();
};

var server = require('http').createServer(app);
server.listen(8001);
