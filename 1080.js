var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(Number);
var maior=0
var posicao=0
for(var i=0;i<=lines.length;i++){
    if(lines[i]>maior){
        maior=lines[i]
        posicao=i+1
    }
} console.log(`${maior}\n${posicao}`)
