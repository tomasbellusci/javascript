let carritoCompras = []

class producto{
    constructor(nombre, precio, cantidad){
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
    }
}

const testosterona = new producto ("testosterona",7550,)
const trembolona = new producto ("trembolona", 9250,)
const protectorHepatico = new producto ("Protector Hepatico", 4300,)

//consulto por la compra de la testosterona

let agregarTesto = prompt("desea agregar testosterona al carrito?")

if (agregarTesto == "si"){
    carritoCompras.push(testosterona)
    let cantidadTesto =  parseInt(prompt("cuantas testosteronas desea agregar?"))

    if(cantidadTesto >= 1){
        testosterona.cantidad = cantidadTesto
    }else{alert("ingrese una cantidad correcta")}
} else{alert("ok!")}

//consulto por la compra de la trembolona

let agregarTrembo = prompt("desea agregar trembolona al carrito?")



if (agregarTrembo == "si"){
    carritoCompras.push(trembolona)
    let cantidadTrembo = prompt("cuantas trembolonas desea agregar?")

    if(cantidadTrembo >= 1){
        trembolona.cantidad = cantidadTrembo
    }else{alert("ingrese una cantidad correcta")}

}else{alert("ok!")}


//consulto por la compra del protector hepatico

let agregarProtector = prompt("desea agregar un protector hepatico al carrito?")

if(agregarProtector == "si"){
    carritoCompras.push(protectorHepatico)
    let cantidadProtector = prompt("cuantos protectores hepaticos desea agregar?")

    if(cantidadProtector >= 1){
        protectorHepatico.cantidad = cantidadProtector
    }else{alert("ingresa una cantidad correcta")}

}else{alert("muchas gracias por comprar con nosotros, en la consola aparecera su pedido y el total de la compra.")}


let acumulador = 0

for(let producto of carritoCompras){
    acumulador += producto.precio * producto.cantidad
}

console.log(carritoCompras)
console.log(acumulador)