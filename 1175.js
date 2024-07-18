var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var x=0
for(var i=20;i>0;i--){
  console.log(`N[${x}] = ${lines[i-1]}`)
  x++
}