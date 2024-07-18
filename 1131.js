var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var grenais=0
var inter=0
var gremio=0
var empates=0
var vencedor=''
for(var i=0;i<=lines.length;i=i+2){
    var posicoes=lines[i].split(' ')
    console.log('Novo Grenal (1-sim 2-nao)')
    grenais++
    if(posicoes[0]>posicoes[1]){
        inter++
    }else if(posicoes[0]<posicoes[1]){
        gremio++
    }else if(posicoes[0]==posicoes[1]){
        empates++
    }

    if (lines[i+1]==2){break}

}
if(gremio<inter){
    vencedor='Inter venceu mais'
}else if(inter<gremio){
    vencedor='Gremio venceu mais'
}else {
    console.log('Nao houve vencedor');
  }
console.log(`${grenais} grenais
Inter:${inter}
Gremio:${gremio}
Empates:${empates}
${vencedor}`)