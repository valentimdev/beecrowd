var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var [a,b,c]= lines[0].split(' ').map(Number)
if((a + b > c && a + c > b && b + c > a)){
    console.log(`Perimetro = ${(a+b+c).toFixed(1)}`)}else{
    console.log(`Area = ${(((b+a)*c)/2).toFixed(1)}`) }
    