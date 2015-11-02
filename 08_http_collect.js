var http = require('http');
var url = process.argv[2];
http.get(url, function callback (response) {
  response.setEncoding('utf8');
  var body = '';
  response.on("data", function (data) {
    body += data;
  });
  response.on('end', function(){
    console.log(body.length);
    console.log(body);
  });
});
