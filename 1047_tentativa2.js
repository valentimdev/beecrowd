var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var [hora1,minuto1,hora2,minuto2]= lines[0].split(' ').map(Number)
var horafinal=(hora2-hora1)*60
var minutofinal=minuto2-minuto1
var tempo= (horafinal+minutofinal)
if(tempo<=0){
    tempo+=24*60
}
    horafinal=tempo/60
    minutofinal=tempo%60
    console.log(`O JOGO DUROU ${parseInt(horafinal)} HORA(S) E ${Math.abs(parseInt(minutofinal))} MINUTO(S)`)
