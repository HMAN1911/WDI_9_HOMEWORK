var fs = require('fs');

//need to use request and response
//make a new file about.html and put text in there

//need 2 built in libraries, 1 is optional
//http fs url

//request object find path

var app = function(request, response){
  console.log('check in terminal');

  //start response only have to write it once 
  response.writeHead(200, {'Content': 'text/html'});    //HTTP status code //make the type html  //or could make it json for api
  response.write('<h1>hello</h1>');

  var url = request.url;
  //if they go to the '/' respond with hello world as pure text
  if(url === '/'){
    response.write('hello world');
    response.end();
    // response.end();
  //if they go to '/donate' - respond with <h1>please donate</h1>
  }else if (url === '/donate'){
    response.write('<h1>please donate</h1>');
    response.end();

  // if go to '/wdi' -respond with http status code 404 and text oops
  }else if (url === '/wdi'){
    response.write('<h1>status code etc</h1>');
    response.end();

  // if they go to '/about' - respond with text stored in about.html
  }else if (url === '/about'){

      fs.readFile('about.html', 'utf8', function(err, data) {
        //  response.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
         response.write(data);
         response.end();
      });

    }
//end response
// response.end(); //if you dont use this the page will keep restarting
}

//STEP ONE
var server = require('http').createServer(app);
server.listen(7000);  //tell server to start - give it a port name
