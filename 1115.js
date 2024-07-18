var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
for(var i = 0; i < lines.length; i++){
    var posicao=lines[i].split(' ');
    if(posicao[0]>0 && posicao[1]>0){
        console.log('primeiro')
    }else if(posicao[0]<0 && posicao[1]>0)
    {console.log('segundo')}else if(posicao[0]<0 && posicao[1]<0){
        console.log('terceiro')
    }else if(posicao[0]>0 && posicao[1]<0){console.log('quarto')}}
