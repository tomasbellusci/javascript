
class Producto {
    constructor(nombre,marca,precio,stock){
        this.nombre= nombre
        this.marca = marca 
        this.precio = precio
        this.stock = stock
    }
}


let testosterona = new Producto (`Testosterona`, `Roid plus`, 7500, 100)
let estanozolol = new Producto (`Estanozolol`, `Roid plus`, 5000, 150)
let trembolona = new Producto (`Trembolona`, `Roid plus`, 8800, 110 )
let primobolan = new Producto (`Primobolan`, `Utlab`, 7000, 130)


let catalogo = [ testosterona, estanozolol, trembolona, primobolan]

let carrito = []

if(localStorage.getItem(`carrito`)){
    carrito = JSON.parse(localStorage.getItem(`carrito`))
}else{
    localStorage.setItem(`carrito`, JSON.stringify(`carrito`))
}


let contenedor = document.querySelector(`#contenedor`)

catalogo.forEach((producto, indice) => {
    contenedor.innerHTML += `
    <div class="card"  id"producto${indice}"style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Marca: ${producto.marca}</li>
            <li class="list-group-item">$ ${producto.precio}</li>
        </ul>
        <button type="button" id="botonCarrito${indice}" class="btn btn-dark">Añadir al carrito</button>
    </div>
    `
})

catalogo.forEach((producto , indice) =>{
    document.querySelector(`#botonCarrito${indice}`).addEventListener(`click`, () =>{
        let productoCarrito = catalogo[indice]
        carrito.push(productoCarrito)
        console.log(carrito)
        localStorage.setItem(`carrito`, JSON.stringify(carrito))
    })
} )


