var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
for(var i=1;i<=parseInt(lines[0]);i++){
  if(parseInt(lines[0])%i==0){
    console.log(i)
  }
}