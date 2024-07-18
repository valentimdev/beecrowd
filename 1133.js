var input = require('fs').readFileSync('stdin', 'utf8');
var [numero1,numero2] = input.split('\n').map(Number);
max=Math.max(numero1,numero2)
min=Math.min(numero1,numero2)
for(var i=min+1;i<max;i++){
    if(i%5==2 || i%5==3){
        console.log(i)
    }
}