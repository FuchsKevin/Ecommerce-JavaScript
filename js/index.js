const contenedorTarjetas = document.getElementById("productos-container");


function crearTarjetasProductosInicio(productos){
  productos.forEach(producto => {
    const nuevaBebida = document.createElement("div");
    nuevaBebida.classList = "tarjeta-producto"
    nuevaBebida.innerHTML = `
    <img src="./img/productos/${producto.id}.jpg" alt="Bebida 1">
    <h3>${producto.nombre}</h3>
    <p class="precio">$${producto.precio}</p>
    <button>Agregar al carrito</button>`
    contenedorTarjetas.appendChild(nuevaBebida);
    nuevaBebida.getElementsByTagName("button")[0].addEventListener("click",() => agregarAlCarrito(producto))
  });
}
crearTarjetasProductosInicio(bebidas);
