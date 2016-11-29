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
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write('<h1>Hello Charith</h2>')
      res.end();
      break;
    case '/about':
      // var fileStream = fs.createReadStream('about.html');
      // fileStream.pipe(res);
      fs.readFile(__dirname + '/about.html', function(err, data) {
        res.write(data.toString());
        res.end();
      });
      break;
    case '/donate':
      res.write('<h1>Please Donate</h2>');
      res.end();
      break;
    default:
      res.writeHead(404);
      res.write('<h1>Not Found</h2>');
      res.end();
  }
});
server.listen(8001);
