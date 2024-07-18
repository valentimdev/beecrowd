var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var [numero1,numero2,numero3]=lines[0].split(' ').map(Number)
var [numero1final,numero2final,numero3final]=lines[0].split(' ').map(Number)
var aux=0
if(numero1final>numero3final){
    aux=numero1final
    numero1final=numero3final
    numero3final=aux
    
}
if(numero1final>numero2final){
   aux=numero1final
   numero1final=numero2final
   numero2final=aux
}
if(numero2final>numero3final){
    aux=numero2final
    numero2final=numero3final
    numero3final=aux
}
console.log(numero1final)
console.log(numero2final)
console.log(numero3final)
console.log('')
console.log(numero1)
console.log(numero2)
console.log(numero3)