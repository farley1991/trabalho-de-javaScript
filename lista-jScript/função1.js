//função de ordenaçao alfabetica.
function converte(letras) {
    var alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var codigos = [];
    for (var i in letras) {
        codigos.push(alfabeto.indexOf(letras[i].toUpperCase()) + 1);
    }
    return codigos;
}

var resultado = converte("acdA");
for (var i in resultado) {
    console.log(resultado[i]);
}