var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(Number);
var nota1='0'
var nota2='0'
for(var i = 0; i < lines.length; i++){
    var nota=lines[i]
    if(nota<0 || nota>10){
        console.log('nota invalida')
    }else if(nota1==='0'){
        nota1=nota
    }else if(nota1!=='0' && nota2==='0'){
        nota2=nota}
    if(nota1!=='0' && nota2!=='0'){
        parseFloat(nota1)
        parseFloat(nota2)
        var media=(nota1+nota2)/2
        console.log(`media = ${(media).toFixed(2)}`)
        nota1='0'
        nota2='0'
    }
}
