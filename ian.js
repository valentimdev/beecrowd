var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split("\n");
let matriz=[]
[]
[5,s,1,2,3]
[4,5,6,7,8]
143 0
144 1
for(var i=0;i<12;i++){
  matriz[i]=[]
  for(var j=0;j<12;j++){
    matriz[i][j]=parseInt(lines.shift())
  }
}
console.table(matriz)
// .push

// diagonal principal=coluna==linha
// diagonal secundaria=
// matriz12-1= linha+colua=tamanho da matriz -1











// for (var i = 0; i < 5; i++) {
//   matriz[i] = []
//   for (var j = 0; j < 5; j++){
//       matriz[i][j]=parseInt(lines[(i*5)+j+1])
//   }
// }
// console.table(matriz)