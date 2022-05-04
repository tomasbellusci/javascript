let usuario
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