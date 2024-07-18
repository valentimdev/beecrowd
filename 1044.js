var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var [a,b]=lines[0].split(' ').map(Number)
if((b % a)==0 || (a % b)==0){console.log("Sao Multiplos")
}else if((b%a)!=0){console.log('Nao sao Multiplos')}