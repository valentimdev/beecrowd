var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(Number);
var tamanho=lines.shift()
var int=0
var out=0

for (var i=0;i<tamanho;i++){
    if(lines[i]>=10 && lines[i]<=20){
        int=int+1
       
        
    }else{
        out=out+1
    }
}console.log(`${int} in
${out} out`)
