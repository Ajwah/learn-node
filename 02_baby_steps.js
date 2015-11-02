var commandLine = process.argv;
var sum = 0;
for (var i=2;i<commandLine.length;i++) {
  sum += +commandLine[i];
}
console.log(sum);