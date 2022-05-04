let entradas
let cantidad
const valorBoc = 200
const valorRiv = 150
const valorInd = 180


function valorEntradas (cantidad, valor){
    return cantidad * valor
}





do {
    entradas = prompt("queres comprar entradas para ver a independiente, river o boca ? ")

    console.log("1 " + entradas);

    // Condicion si le dan cancelar.
    if (entradas == null) {
        break;
    }

    if (entradas == "river" || entradas == "boca" || entradas == "independiente") {
        cantidad = parseFloat(prompt("Valido! cuantas entradas queres comprar ? "))
            // .. continuar
    } else {
        alert("equipo no válido");
        console.log("2 " + entradas);
    }

    if(entradas == "river"){
        alert(valorEntradas(cantidad,valorRiv))
    }

    if(entradas == "independiente"){
        alert(valorEntradas(cantidad,valorInd))
    }

    if(entradas == "boca"){
        alert(valorEntradas(cantidad,valorBoc))
    }

} while (entradas != "river" || entradas != "boca" || entradas != "independiente")

console.log("saliste");