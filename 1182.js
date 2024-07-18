var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var valor = lines.shift()
var operacao = lines.shift()
var final=0
for(var i =0;i<11;i++){
  valor=parseFloat(valor)
  var valor2=lines[valor]
final+=valor2
valor=valor+12

}
if(operacao=='s'){
  console.log(final.toFixed(1))
}else{console.log(final/12)}
