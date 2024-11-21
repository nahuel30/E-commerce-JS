const carritoResultado = JSON.parse(localStorage.getItem("carrito"));

const contenedorCarrito = document.getElementById("CarritoDeCompras");

const borrarCarrito = document.getElementById("CarritoDeCompras");

function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carritoResultado));
}

carritoResultado.forEach((el, index)=>{
    const articulo = document.createElement("div");
    const img = document.createElement("img");
    const nombre = document.createElement("h3");
    const precio = document.createElement("p");
    const botonMenos = document.createElement("button");
    const cantidad = document.createElement("p");
    const botonMas = document.createElement("button");
    const cantidadTotal = document.createElement("div");
    const botonBorrarArticulo = document.createElement("button");
    
    articulo.className = "articuloCarrito";
    cantidadTotal.className = "cantidadTotal";

    botonMenos.addEventListener("click", () => {
        if (el.cantidad > 1) { 
            el.cantidad -= 1; 
            cantidad.innerText = `Cantidad: ${el.cantidad}`;
            calcularTotal();
            guardarCarrito();
        }
    });

    botonMas.addEventListener("click", () => {
        el.cantidad += 1; 
        cantidad.innerText = `Cantidad: ${el.cantidad}`;
        calcularTotal();
        guardarCarrito();
    });

    botonBorrarArticulo.addEventListener("click", () => {
        carritoResultado.splice(index, 1);
        contenedorCarrito.removeChild(articulo);
        calcularTotal();
        guardarCarrito();
    });

    nombre.innerText = el.nombre;
    precio.innerText = `$${el.precio}`;
    botonMenos.innerText = "-";
    botonMas.innerText = "+";
    botonBorrarArticulo.innerText = "X";
    cantidad.innerText = `Cantidad: ${el.cantidad}`;
    img.src = el.img;
    img.alt = el.nombre;

    articulo.appendChild(img);
    articulo.appendChild(nombre);
    articulo.appendChild(precio);
    cantidadTotal.appendChild(botonMenos);
    cantidadTotal.appendChild(cantidad);
    cantidadTotal.appendChild(botonMas);
    articulo.appendChild(cantidadTotal);
    articulo.appendChild(botonBorrarArticulo);

    contenedorCarrito.appendChild(articulo);
})


const botonBorrar = document.getElementById("borrarCarrito");
botonBorrar.className = "botonBorrar"

botonBorrar.addEventListener("click", () => {
    carritoResultado.length = 0;
    localStorage.setItem("carrito", JSON.stringify(carritoResultado));

    const contenedorCarrito = document.getElementById("CarritoDeCompras");
    contenedorCarrito.innerHTML = "";

    const contenedorTotal = document.getElementById("Total");
    contenedorTotal.textContent = "TOTAL: $0";
});


function calcularTotal() {
    const contenedorTotal = document.getElementById("Total");
    const total = carritoResultado.reduce((acumulador, producto) => acumulador + (producto.precio * producto.cantidad)  ,0);
    contenedorTotal.textContent = `TOTAL: $${total}`;
}

calcularTotal();