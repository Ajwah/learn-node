var ls = require('./ls');
var pathname = process.argv[2];
var extension = process.argv[3];
ls(pathname, extension, function(err, data){
  if (err) {
    console.log(err);
  } else {
    data.forEach(function(e) {console.log(e);});
  }
});