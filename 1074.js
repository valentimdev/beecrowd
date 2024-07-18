var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(Number);
var tamanho=lines.shift('')
for(var i=0;i<tamanho;i++){
    if ((lines[i])>0 && (lines[i]%2==0)){
        console.log('EVEN POSITIVE')
    }else if((lines[i])>[0] && (lines[i])%2!=0){
        console.log('ODD POSITIVE')
    }else if((lines[i])<[0] && (lines[i])%2==0){
        console.log('EVEN NEGATIVE')
    }else if((lines[i])<[0] && (lines[i])%2!=0){
        console.log('ODD NEGATIVE')}else if((lines[i])==0){console.log('NULL')}
    }