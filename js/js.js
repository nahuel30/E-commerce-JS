// para recuperar el carrito desde localStorage, o inicializarlo como vacío si es la primera vez:

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const contenedorArticulos = document.getElementById("Tienda");

// acceder al archivo JSON
fetch("https://nahuel30.github.io/E-commerce-JS/data/articulos.JSON")
.then(response => response.json())
.then(data => {

    data.forEach(el =>{
        const articulo = document.createElement("div");
        const img = document.createElement("img");
        const nombre = document.createElement("h3");
        const precio = document.createElement("p");
        
        const botonAgregarAlCarrito = document.createElement("button");
    
        botonAgregarAlCarrito.className = "boton"
    
        botonAgregarAlCarrito.textContent = "Agregar al Carrito"
    
        botonAgregarAlCarrito.addEventListener("click", () => agregarAlCarrito(el));
    
        articulo.className = "articulo";
    
        nombre.innerText = el.nombre;
        precio.innerText = `$${el.precio}`;
        img.src = el.img;
        img.alt = el.nombre;
        
        articulo.appendChild(img);
        articulo.appendChild(nombre);
        articulo.appendChild(precio);
        
        articulo.appendChild(botonAgregarAlCarrito);
    
        contenedorArticulos.appendChild(articulo);
    })
    
    function agregarAlCarrito(el) {
        const itemExistente = carrito.find(item => item.id === el.id);
        if (itemExistente) {
           itemExistente.cantidad += 1;
        } else {
            carrito.push({ ...el, cantidad: 1 });
        }
        localStorage.setItem("carrito", JSON.stringify(carrito));
    };

});