//concatenar vetores
const vet1 = [7, 8, 9]
const vet2 = [8, 7, 6, 5, 4, 3, 2, 1]
const conjunto = vet2.concat(vet1)

console.log(conjunto)


//ordenar vetores decrescente
console.log(conjunto.sort(function(x, y){return y-x}))

//ordenar vetores crescente
console.log(conjunto.sort(function(x, y){return x-y}))
// exercicio 3


