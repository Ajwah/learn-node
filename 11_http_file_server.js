var fs = require('fs');
var http = require('http');

var port = Number(process.argv[2]);
var file = process.argv[3];
var stream = fs.createReadStream(file);
var d;

var server = http.createServer(function (req, res) {
  stream.pipe(res);
});

server.listen(port)