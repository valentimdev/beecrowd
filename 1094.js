var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var total = 0;
var sapo = 0;
var rato = 0;
var coelho = 0;
var i = 1;

while (i <= parseInt(lines[0])) {
    var [posicoes1,posicoes2] = lines[i].split(' ');
    total += parseInt(parseInt(posicoes1));

    if (posicoes2=='C' || posicoes2=='C\r' || posicoes2=='\rC' || posicoes2=='C ') {
        coelho+=parseInt(posicoes1);
    } else if (posicoes2=='R' || posicoes2=='R\r') {
        rato+=parseInt(posicoes1);
    } else if (posicoes2=='S' || posicoes2=='S\r') {
        sapo+=parseInt(posicoes1);
    }

    i++;
}
console.log(`Total: ${total} cobaias
Total de coelhos: ${coelho}
Total de ratos: ${rato}
Total de sapos: ${sapo}
Percentual de coelhos: ${((coelho*100)/total).toFixed(2)} %
Percentual de ratos: ${((rato*100)/total).toFixed(2)} %
Percentual de sapos: ${((sapo*100)/total).toFixed(2)} %`)