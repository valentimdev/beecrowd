var input = require('fs').readFileSync('stdin', 'utf8');
var lines1 = input.split('\n');
var lines=parseFloat(lines1)
var salario=  0 
var reajuste= 0
var percentual
if(lines>2000){
    salario = (lines+lines*0.04)
    reajuste= lines*0.04
    percentual=("Em percentual: 4 %")
    
}else if(lines>1200){
    salario =(lines+lines*0.07)
    reajuste= (lines*0.07)
     percentual = ("Em percentual: 7 %")
}else if(lines>800){
   salario = reajuste= (lines+lines*0.10)
    reajuste= (lines*0.10)
    percentual = ("Em percentual: 10 %")
}else if(lines>400){
   salario = (lines+lines*0.12)
   reajuste=  (lines*0.12)
    percentual = ("Em percentual: 12 %")
}else if(lines<=400){
  salario =  lines+lines*0.15
   reajuste= (lines*0.15)
   percentual = ("Em percentual: 15 %")}

   console.log(`Novo salario: ${(salario).toFixed(2)}`)
   console.log(`Reajuste ganho: ${reajuste}`)
   console.log(percentual)