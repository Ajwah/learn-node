var bl = require('bl')

var http = require('http');
var url = process.argv[2];

function solution1() {
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
}

function solution2() {
  http.get(url, function callback (response) {
    response.pipe(bl(function (err, data) {
      console.log(data.toString().length);
      console.log(data.toString());
    }));
  });
}

solution2();