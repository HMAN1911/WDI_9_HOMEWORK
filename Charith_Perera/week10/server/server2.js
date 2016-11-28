// make a new file named about.html
// and put some crap in there(just text)
// hint : you will need 3 built in libraries, 1 is optional
// http fs url

// '/' display hello world
// '/about' - display text stroed in a about.html file
// '/donate' - response with <h1>please donate</h1>

var fs = require('fs');
var url = require("url");
var server = require('http').createServer(function(req, res) {
  var uri = url.parse(req.url).pathname;
  console.log(uri);
  switch (uri) {
    case '/':
      res.write('<h1>Hello World</h2>')
      res.end();
      break;
    case '/about':
      var fileStream = fs.createReadStream('about.html');
      fileStream.pipe(res);
      break;
    case '/donate':
      res.write('<h1>Please Donate</h2>');
      res.end();
      break;
    default:
      res.write('<h1>Not Found</h2>');
      res.end();
  }
});
server.listen(8001);
