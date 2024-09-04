const cuentaCarritoElement = document.getElementById("cuenta-carrito");


function agregarAlCarrito(producto){
  
  
  let memoria = JSON.parse(localStorage.getItem("bebidas"));
  swal.fire({
    toast: true,
    title: "Agregaste una bebida al carrito",
    position: "bottom-end",
    timer: 3500,
    timerProgressBar: true,
    showConfirmButton: false,
    imageUrl: "https://cdn-icons-png.flaticon.com/512/68/68955.png",
    imageWidth: 80,
    

  }
         
  )
  let cantidadProductoFinal;
  
  
  if(!memoria || memoria.length === 0) {
    const nuevoProducto = getNuevoProductoParaMemoria(producto)
    localStorage.setItem("bebidas",JSON.stringify([nuevoProducto]));
    actualizarNumeroCarrito();
    cantidadProductoFinal = 1;
  }
  else {
    
    const indiceProducto = memoria.findIndex(bebida => bebida.id === producto.id)
    const nuevaMemoria = memoria;
    
    if(indiceProducto === -1){
      const nuevoProducto = getNuevoProductoParaMemoria(producto);
      nuevaMemoria.push(nuevoProducto);
      cantidadProductoFinal = 1;
    } else {
      
      nuevaMemoria[indiceProducto].cantidad ++;
      cantidadProductoFinal = nuevaMemoria[indiceProducto].cantidad;
    }
    localStorage.setItem("bebidas",JSON.stringify(nuevaMemoria));
    
    actualizarNumeroCarrito();
    
    return cantidadProductoFinal;
    
  }
  
}


function restarAlCarrito(producto){
  let memoria = JSON.parse(localStorage.getItem("bebidas"));
  let cantidadProductoFinal = 0;
  const indiceProducto = memoria.findIndex(bebida => bebida.id === producto.id)
  let nuevaMemoria = memoria;
  nuevaMemoria[indiceProducto].cantidad--;
  cantidadProductoFinal = nuevaMemoria[indiceProducto].cantidad;
  if(cantidadProductoFinal === 0){
    nuevaMemoria.splice(indiceProducto,1)
  };
  localStorage.setItem("bebidas",JSON.stringify(nuevaMemoria));
  swal.fire({
    toast: true,
    title: "Eliminaste una bebida del carrito",
    position: "bottom-end",
    timer: 3500,
    timerProgressBar: true,
    showConfirmButton: false,
    imageUrl: "https://media.istockphoto.com/id/917236940/es/vector/ilustraci%C3%B3n-del-icono-de-botella-rota.jpg?s=612x612&w=0&k=20&c=IL0-b0kY6flEpa3rqjV_jobENf-oYmno8m-FZJKz-2I=",
    imageWidth: 90
  }
         
  )
  
  actualizarNumeroCarrito();
  return cantidadProductoFinal;
}


function getNuevoProductoParaMemoria(producto){
  const nuevoProducto = producto;
  nuevoProducto.cantidad = 1;
  return nuevoProducto;
}


function actualizarNumeroCarrito(){
  let cuenta = 0;
  const memoria = JSON.parse(localStorage.getItem("bebidas"));
  if(memoria && memoria.length > 0){
    cuenta = memoria.reduce((acum, current)=>acum+current.cantidad,0)
    return cuentaCarritoElement.innerText = cuenta;
  }
  cuentaCarritoElement.innerText = 0;
}


function reiniciarCarrito(){
  localStorage.removeItem("bebidas");
  swal.fire({
    toast: true,
    title: "El carrito está vacio",
    position: "bottom-end",
    timer: 3500,
    timerProgressBar: true,
    showConfirmButton: false,
    icon: "warning",
    
  }
         
  )
  
  

  actualizarNumeroCarrito();
}


actualizarNumeroCarrito();