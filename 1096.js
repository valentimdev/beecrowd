
var i=1
var j=7
var aux=6
while(i<=9 && j<=16){
    if(i==9 && j==13){break}
    console.log(`I=${i} J=${j}`)
    if(j>aux){
        aux=j
        j=j+4
        i=i+2
    }
    j--

}