var input = require('fs').readFileSync('stdin', 'utf8');
var [vertebra,tipo,alimento] = input.split('\n');
var animal = "desconhecido"
if(vertebra=='vertebrado' && tipo=='ave' && alimento=='carnivoro'){
    animal=('aguia')}
else if(vertebra=='vertebrado' && tipo=='ave' && alimento=='onivoro'){
    animal =('pomba')}
    else if(vertebra=='vertebrado' && tipo=='mamifero' && alimento=='onivoro'){
        animal =("homem")}
        else if(vertebra=='vertebrado' && tipo=='mamifero' && alimento=='herbivoro'){
            animal =('vaca')}
else if (vertebra=='invertebrado' && tipo=='inseto' && alimento=='hematofago'){
    animal =('pulga')
}else if (vertebra=='invertebrado' && tipo=='inseto' && alimento=='herbivoro'){
    animal =('lagarta')
}else if (vertebra=='invertebrado' && tipo=='anelideo' && alimento=='hematofago'){
    animal =('sanguessuga')
}else if (vertebra=='invertebrado' && tipo=='anelideo' && alimento=='onivoro'){
    animal =('minhoca')
}
console.log(animal)