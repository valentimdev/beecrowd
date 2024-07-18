var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var [hora1,minuto1,hora2,minuto2] = lines[0].split(' ').map(Number)
var horafinal = 0
var horafinalreal= 0
var minutofinal = 0
if (hora1<hora2){
    horafinal= hora1-hora2
}else if(hora1==hora2){
    horafinal=24
}else if(hora1>hora2 ){
    horafinal=(24-hora1)+hora2
}

if (minuto1<minuto2){
    minutofinal=minuto1-minuto2
    horafinalreal=horafinal
}if(minuto1>minuto2){
    minutofinal=(minuto1-minuto2)-60
    horafinalreal=(Math.abs(horafinal)-1)
}if(hora1==hora2 && minuto1!=minuto2){
    horafinalreal=horafinal-24}
    if(hora1==hora2 && minuto1==minuto2){
    (horafinalreal=24)}
    if(hora1==hora2 && minuto1<minuto2){
        horafinalreal=0
        minutofinal=minuto1-minuto2
    }
    if(hora1==hora2 && minuto1>minuto2){
        horafinalreal=23
        minutofinal=minuto1+minuto2
    }
    

console.log(`O JOGO DUROU ${Math.abs(horafinalreal)} HORA(S) E ${Math.abs(minutofinal)} MINUTO(S)`)