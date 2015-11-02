var net = require('net');
var port = Number(process.argv[2]);

function getTimeStamp() {
  var delims = {
    dash: function() { return '-'; },
    colon: function() { return ':'; },
    space: function() { return ' '; },
    newLine: function() { return '\n'; }
  }

  var now = new Date;
  var getMonth = function() {
    return now.getMonth() + 1;
  };

  var timeMethods = [
    Date.prototype.getFullYear.bind(now),
    delims.dash,
    getMonth,
    delims.dash,
    Date.prototype.getDate.bind(now),
    delims.space,
    Date.prototype.getHours.bind(now),
    delims.colon,
    Date.prototype.getMinutes.bind(now),
    delims.newLine
  ];

  /**
   * Prepend a unit of time with a zero if it is only one digit long.
   * This is only needed for digits which are alternaly interspersed
   * with deliminators.
   * @param  {String} e An element from timeMethods Array
   * @param  {Number} i Current index in array it belongs to
   * @return {String}
   */
  function prependZero(e, i){
    // Skip deliminators.
    if (i % 2 !== 0) { return e; };

    // If only one digit long then prepend with zero.
    if (e.length === 1) {
      return '0' + e;
    } else {
      return e;
    }
  }

  return timeMethods.map(Function.prototype.call, Function.prototype.call) // invoke every function
                    .map(String) // Convert to string
                    .map(prependZero) // If need be, prepend with zero
                    .join(''); // convert array to string
}

var server = net.createServer(function (socket) {
  socket.end(getTimeStamp());
})
server.listen(port);