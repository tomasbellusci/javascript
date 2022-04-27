/* 

let usuario
DESAFIO COMPLEMENTARIO 1
do{
    usuario = parseFloat(prompt("Cuantas Libertadores tiene tu equipo?"))
    console.log(usuario)

    if(isNaN(usuario)) {
        alert("Ingresa números válidos.")
    }

    if(usuario < 0 ){
        alert("Ingresa números válidos.")
    }

    if(usuario < 7){
        alert("Oh no! Tu equipo no es el Rey de Copas")
    }

    if(usuario === 7){
        alert("Felicidades! Sos de Independiente!")
    }
}while(isNaN(usuario))

console.log(usuario) 

|| 


let usuario

do{
    usuario = parseInt(prompt("Escriba 1 para comprar suplementos. Escriba 2 para comprar anabolicos"))
    console.log(usuario)

    if(usuario != 1 &&  usuario != 2 ){
        alert("Ingrese números válidos por favor.")
    }

    if(usuario == 1){
        alert("Usted quiere comprar suplementos")
    }

    if(usuario == 2){
        alert("Usted quiere comprar anabolicos")
    }
}while(isNaN(usuario))

console.log(usuario)*/ 



let entradas
let cantidad
const valorBoc = 200
const valorRiv = 150
const valorInd = 180
let costoInd = cantidad * valorInd
let costoBoc = cantidad * valorBoc
let costoRiv = entradasRiv

function entradasInd (cantidad, valorInd){
    return cantidad * valorInd
}

function entradasRiv (cantidad, valorRiv){
    return cantidad * valorRiv
}

function entradasBoc (cantidad, valorBoc){
    return cantidad * valorBoc
}

do {
    entradas = prompt("queres comprar entradas para ver a independiente, river o boca ? ")

    console.log("1 " + entradas);

    // Condicion si le dan cancelar.
    if (entradas == null) {
        break;
    }

    if (entradas == "river" || entradas == "boca" || entradas == "independiente") {
        cantidad = parseFloat(prompt("Valido! cuantas entradas queres compar ? "))
            // .. continuar
    } else {
        alert("equipo no válido");
        console.log("2 " + entradas);
    }

    if(entradas == "river"){
        alert(entradasRiv(cantidad,valorRiv))
    }

    if(entradas == "independiente"){
        alert(entradasInd(cantidad,valorInd))
    }

    if(entradas == "boca"){
        alert(entradasBoc(cantidad,valorBoc))
    }

} while (entradas != "river" || entradas != "boca" || entradas != "independiente")

console.log("saliste");




