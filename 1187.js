var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split("\n");
let matriz = []
var valor=parseInt(lines.shift())
var operacao=lines.shift()
var soma = 0
var esquerda = 1
var direita=10 

for (var i = 0; i < 12; i++) {
    matriz[i] = []
    for (var j = 0; j < 12; j++){
        matriz[i][j]=parseInt(lines.shift())
    }
}

for (var x = 0; x < 12; x++){
    for (var p = 0; p < 12; p++) {
        if (x < p && x!=direita) {
            soma += matriz[p][x]
        }}
        if (esquerda == 6) { break }
        esquerda++
        direita--

    }

var final =0
if (operacao == 'S' || operacao == 'S\r') {
    final = soma.toFixed(1)
} else { final = soma / 12 }
console.log(final.toFixed(1))
  