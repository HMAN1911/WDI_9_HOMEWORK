var app = function(request, response) {
  console.log('cool')
  response.writeHead(200, {'Content-Type': 'text/html'})
  response.write('<p>bye</p>');
  response.end();
};
//request and response is the callback signature


var server = require('http').createServer(app);
//if the module is required, you can call things straight away

//parse in an APP, what does your server do?

//a user comes into a site - event
//user clicks a button, - event
//so an app is just a callback to handle the user's actions
server.listen(8001);
