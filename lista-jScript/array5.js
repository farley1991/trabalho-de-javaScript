//concatenar vetores
const vet1 = [7, 8, 9]
const vet2 = [8, 7, 6, 5, 4, 3, 2, 1]
const conjunto = vet2.concat(vet1)

console.log(conjunto)


//8. [Vetores] incremento/decremento


var novoVet = conjunto.filter(function(x, y) {
    return conjunto.indexOf(x) == y;
})
console.log(novoVet)