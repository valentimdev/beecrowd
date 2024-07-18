var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var valores=lines[1].split(' ')
var menor=0
var posicao=0
var aux=0
for(var i=0;lines[0]>i;i++){
  var valor=parseInt(valores[i])
  if(valor<=Math.min(...valores)){
    menor=valor
    posicao=i
  }
}
console.log(`Menor valor: ${(Math.min(...valores))}
Posicao: ${posicao}`)