var fs = require('fs');
var pathname = process.argv[2];
var extension = process.argv[3];
fs.readdir(pathname, function callback(err, data) {
  if (!err) {
    var result = data.filter(function(e) {
      var fileWithExt = e.split('.');
      var ext = (fileWithExt.length > 1) ? fileWithExt.pop() : '';
      return ext == extension ;
    });
    result.forEach(function(e) {
      console.log(e);
    });
  }
});