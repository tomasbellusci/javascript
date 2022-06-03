let contenedor = document.querySelector(`#contenedor`)

fetch(`productos.json`)
.then(response => response.json())
.then(productos => {
    productos.forEach(producto => {
        contenedor.innerHTML += `
        <div class="carta" id="Producto${producto.indice}">
            <img src="${producto.imagen}" alt="" class="img_productos">
            <h5 class="cartaTitulo">${producto.nombre}</h5>
            <p class="cartaMarca">Marca: ${producto.marca}</p>
            <p class="cartaPrecio">$ ${producto.precio}</p>
            <button class="boton_carta" id="botonCarrito${producto.indice}">Añadir al carrito</button>
        </div>
        `
    });
})


