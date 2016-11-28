//creating a server with node.js
//returns an object with methods to call

//app is just a callback function
//server is sitting there waiting - when request/customer comes in you send them the callback - app
//callback has a request and a response being passed in - this is called a callback signature

// //STEP TWO
//
// var app = function(request, response){
//   console.log('cool');
//   response.writeHead(200, {'Content': 'text/html'});    //HTTP status code //make the type html  //or could make it json for api
//   response.write('<p>bye</p>');
//   response.end(); //if you dont use this the page will keep restarting
// }
//
//
// //STEP ONE
// var server = require('http').createServer(app);
// server.listen(8001);  //tell server to start - give it a port name
