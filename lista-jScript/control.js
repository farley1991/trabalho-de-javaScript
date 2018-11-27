// 2. [Controle/Repetição] 
// 5 menores do que 1000.



let vetX =[]
for(let i = 1; i <= 100; i++) {
    vetX.push(i)
}


vetX.forEach(function(x){
    
    if(x%3 === 0){
        console.log(`${x} multiplo 3`)
    }if(x%5 === 0){
        console.log(`${x} multiplo 5`)
    }
}
)