
let carritoCompras = []

let productos = [
    {nombre: "Testosterona", precio: 7500, cant: 1},
    {nombre: "Estanozolol", precio: 4900, cant: 1},
    {nombre: "Trembolona", precio: 9000, cant: 1}
]






let agregarTesto = prompt("Desea agregar testosterona al carrito?")
if (agregarTesto == "si"){
    carritoCompras.push(productos[0])
}else{alert("ok!")}

let agregarEstano = prompt("Desea agregar estano al carrito?")
if (agregarEstano == "si"){
    carritoCompras.push(productos[1])
}else{alert("ok!")}

let agregarTrembo = prompt("Desea agregar trembolona al carrito?")
if (agregarTrembo == "si"){
    carritoCompras.push(productos[2])
    alert("gracias por elegirnos! el total de su carrito aparecera en la consola")
}else{alert("gracias por visitarnos. Si añadio productos, en la consola le saltara el total.")}

let acumulador = 0

for(let producto of carritoCompras){
    acumulador += producto.precio * producto.cant
}


console.log(acumulador)



