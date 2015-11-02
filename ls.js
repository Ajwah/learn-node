var fs = require('fs');
var path = require('path');
module.exports = function (pathName, ext, cb) {
  var extension = '.' + ext;
  fs.readdir(pathName, function filterByExtension(err, files) {
    if (err) { return cb(err, null) }
    var result = files.filter(function(e) {
      return path.extname(e) == extension;
    });
    cb(false, result);
  });
}
