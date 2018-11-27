// 4. [Controle/Repetição]  número ímpar/número par


const x = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
x.forEach(function(x){
    if(x%2 == 0){
        console.log(`${x}  par`)
    }if(x%2 != 0){
        console.log(`${x}  impar`)
    }
}
)

alert("ganhei, pois eu pedi impar")