var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var valor=parseFloat(lines[0])
var valor1
var valor2=1000
var valor3=1500
var valorfinal=0
if(valor<2000){
    console.log("Isento")
}else if(valor>2000 && valor<3000){
    valorfinal=((valor-2000) * 0.08)
}else if(valor>3000 &&  valor<4500){
    valor1=((valor-3000) * 0.18)
    valorfinal=(valor1)+(valor2*0.08)
}else if(valor>=4500){
    valor1=((valor3*0.18)+(valor2*0.08))
    valorfinal=(valor1)+(valor-4500)*0.28}
   
    if(valor>2000){
        console.log(`R$ ${valorfinal.toFixed(2)}`)
    }


   