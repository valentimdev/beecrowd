var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
for(var i=1;i<lines.length;i++){
  var numero=parseInt(lines[i]);
  var str=''
  for(var x=2;x<numero;x++){
    if(numero%x==0){
str='nao eh primo'
    }
}
  if(str=='nao eh primo'){
console.log(`${numero} ${str}`)}else{console.log(`${numero} eh primo`)}
}