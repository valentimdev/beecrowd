var input = require('fs').readFileSync('stdinav3', 'utf8');
var lines = input.split("\n");
let matriz=[]
var operacao=lines.shift().trim()
var soma=0
var multi=1
for(var i=0;i<5;i++){
  matriz[i]=[]
  for(var j=0;j<5;j++){
    matriz[i][j]=parseInt(lines.shift())
  }
}
if(operacao=='DP'){
  for(var x=0;x<5;x++){
    if(matriz[x][x]%2==0){
      soma+=parseInt(matriz[x][x])
    }

  }
}else{
  for(var h=0;h<5;h++){
    for(var f=0;f<5;f++){
      if(h+f==4 && matriz[h][f]%2!=0){
        multi=multi*parseInt(matriz[h][f])
      }
    }
  }
}
console.table(matriz)