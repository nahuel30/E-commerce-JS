const productoContainer = document.getElementById("productosProd");

const carritoContainer = document.getElementById("productosCarrito");

const divTotal = document.getElementById("total");

class Producto {
    constructor(nombre, precio, id) {
        this.nombre = nombre;
        this.precio = precio;
        this.id = id;
    }
}

const productos = [
    {
        nombre: "Vinilo Soda Stereo",
        precio: 50,
        id: 17
    },
    {
        nombre: "Toca Discos Telefunken",
        precio: 200,
        id: 222
    },
    {
        nombre: "Parlantes Wachimiro",
        precio: 150,
        id: 157
    }
];

const carrito = [];

// Agregar el array de productos al html de productos

productos.forEach(el =>{
    // Se crean por separado porque en el carrito no lleva el boton
    const producto = crearProductoGeneral(el);
    const boton = crearBotonAgregar(el);

    producto.appendChild(boton);

    productoContainer.appendChild(producto);
});

// Inputs para agregar productos a la lista

const formulario = document.createElement("div");
formulario.className = "formulario";

const nombreForm = document.createElement("input");
nombreForm.placeholder = "Nombre";
nombreForm.id = "nombreForm";

const precioForm = document.createElement("input");
precioForm.placeholder = "Precio";
precioForm.id = "precioForm";

const idForm = document.createElement("input");
idForm.placeholder = "Id";
idForm.id = "idForm";

const botonForm = document.createElement("button");
botonForm.textContent = "Añadir a los productos";
botonForm.addEventListener("click", () => agregarProducto());

formulario.appendChild(nombreForm);
formulario.appendChild(precioForm);
formulario.appendChild(idForm);
formulario.appendChild(botonForm);

productoContainer.appendChild(formulario);

function crearProductoGeneral(prod){
    const producto = document.createElement("div");
    producto.className = "producto";

    const nombre = document.createElement("h3");

    const precio = document.createElement("p");

    const id = document.createElement("p");

    nombre.innerText = prod.nombre;
    precio.innerText = `$${prod.precio}`;
    id.innerText = `ID: ${prod.id}`;

    producto.appendChild(nombre);
    producto.appendChild(precio);
    producto.appendChild(id);

    return producto;
}

function crearBotonAgregar(el){
    const boton = document.createElement("button");
    boton.textContent = "Añadir al carrito";
    boton.addEventListener("click", () => agregarAlCarrito(el));

    return boton;
}

// Agregar los productos al div de carrito

function agregarAlCarrito(prod) {
    carrito.push(prod);

    carritoContainer.innerHTML = '';

    carrito.forEach(el =>{
        const producto = crearProductoGeneral(el);
        carritoContainer.appendChild(producto);
    });

    // Mostrar el total
    const total = carrito.reduce((acc, prod) => acc + prod.precio, 0);
    divTotal.textContent = `Total: $${total}`;
}

function agregarProducto(){
    const nombre = document.getElementById("nombreForm").value;
    const precio = parseFloat(document.getElementById("precioForm").value);
    const id = parseInt(document.getElementById("idForm").value);

    const producto = new Producto(nombre, precio, id);
    productos.push(producto);

    const nuevoProducto = crearProductoGeneral(producto);

    const boton = crearBotonAgregar(producto);

    nuevoProducto.appendChild(boton);

    productoContainer.appendChild(nuevoProducto);

    nombreForm.value = '';
    precioForm.value = '';
    idForm.value = '';
}