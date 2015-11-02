var http = require('http');
var urls = process.argv.slice(2);

function processUrls(urls, acc) {
  if (urls.length === 0) {
    acc.forEach(function(e) {console.log(e);});
  } else {
    var url = urls.shift();
    http.get(url, function callback (response) {
      response.setEncoding('utf8');
      var body = '';
      response.on("data", function (data) {
        body += data;
      });
      response.on('end', function(){
        acc.push(body);
        processUrls(urls, acc);
      });
    });
  }
}

processUrls(urls, []);