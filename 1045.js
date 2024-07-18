var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [A,B,C]=lines[0].split(' ').map(Number)
if ( A >= (B+C)){
    console.log('NAO FORMA TRIANGULO')
}if(A*A == B*B + C*C){
    console.log('TRIANGULO RETANGULO')

}else if( (A*A) < (B*B + C*C)){
    console.log('TRIANGULO ACUTANGULO')

}else if( (A*A) > (B*B + C*C)){
    console.log('TRIANGULO OBTUSANGULO')
}if((A==B) && (B==C) && (C==A)){
    console.log('TRIANGULO EQUILATERO')
}else if((A==B) || (B==C)){
    console.log('TRIANGULO ISOSCELES')
}