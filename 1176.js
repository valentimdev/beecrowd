var input = require('fs').readFileSync('stdin2', 'utf8');
var lines = input.split('\n');
var tamanho=lines.shift()
for(var i=0;i<tamanho;i++){
  var valor=lines[i]
  var soma=1
  var y=0
  var z=0
  for(x=1;x<valor;x++){
    z=y+soma
    y=soma
    soma=z

  }

  if(valor==0){
    console.log(`Fib(${valor}) = 0`)else if{
      console.log(`Fib(${valor})
    }
 }else if(valor!=0){console.log(`Fib(${valor}) = ${z}`)}

}
