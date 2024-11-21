const carritoResultado = JSON.parse(localStorage.getItem("carrito"));

const contenedorLista = document.getElementById("listaPagar");

carritoResultado.forEach((el)=>{
    const articulo = document.createElement("div");
    const nombre = document.createElement("h3");
    const precio = document.createElement("p");
    
    articulo.className = "articulo-lista";

    nombre.innerText = el.nombre;
    precio.innerText = `$${el.precio * el.cantidad}`;
    
    articulo.appendChild(nombre);
    articulo.appendChild(precio);
    

    contenedorLista.appendChild(articulo);
})

const contenedorTotal = document.getElementById("totalLista");
const total = carritoResultado.reduce((acumulador, producto) => acumulador + (producto.precio * producto.cantidad)  ,0);
contenedorTotal.textContent = `TOTAL: $${total}`;


const formularioPagar = document.getElementById("formulario");

const divNombre = document.createElement("div");
divNombre.className = "grupo-formulario";

const nombreTarjeta = document.createElement("label");
nombreTarjeta.innerText = "Nombre en la tarjeta";
const inputNombre = document.createElement("input");
inputNombre.placeholder = "Ej. Juan Pérez";

divNombre.appendChild(nombreTarjeta);
divNombre.appendChild(inputNombre);

const divNumero = document.createElement("div");
divNumero.className = "grupo-formulario";

const numeroTarjeta = document.createElement("label");
numeroTarjeta.innerText = "Numero en la tarjeta";
const inputNumero = document.createElement("input");
inputNumero.placeholder = "0000 0000 0000 0000";

divNumero.appendChild(numeroTarjeta);
divNumero.appendChild(inputNumero);

const divFecha = document.createElement("div");
divFecha.className = "grupo-formulario";

const fechaVencimiento = document.createElement("label");
fechaVencimiento.innerText = "Fecha de Vencimiento";
const inputVencimiento = document.createElement("input");
inputVencimiento.placeholder = "MM/AA";

divFecha.appendChild(fechaVencimiento);
divFecha.appendChild(inputVencimiento);

const divCCV = document.createElement("div");
divCCV.className = "grupo-formulario";

const ccv = document.createElement("label");
ccv.innerText = "CCV";
const inputCCV = document.createElement("input");
inputCCV.placeholder = "123";

divCCV.appendChild(ccv);
divCCV.appendChild(inputCCV);

const botonPagar = document.createElement("button")
botonPagar.innerText = "Confirmar Pago"
botonPagar.className = "btn";

botonPagar.addEventListener("click", () => {
    const errores = [];

    if (!inputNombre.value.trim()) {
        errores.push("El campo 'Nombre de tarjeta' es obligatorio.");
    }
    if (!inputNumero.value.trim()) {
        errores.push("El campo 'Número de tarjeta' es obligatorio.");
    }
    if (!inputVencimiento.value.trim()) {
        errores.push("El campo 'Fecha de vencimiento' es obligatorio.");
    }
    if (!inputCCV.value.trim()) {
        errores.push("El campo 'CCV' es obligatorio.");
    }

    if (errores.length > 0) {
        Swal.fire({
            title: "Formulario incompleto",
            text: errores.join("\n"),
            icon: "warning"
        });
        return;
    }

    Swal.fire({
        title: "Pago Realizado",
        text: "Gracias por elegirnos!",
        icon: "success"
    }).then(() => {
        carritoResultado.length = 0;
        localStorage.setItem("carrito", JSON.stringify(carritoResultado));
        window.location.href = "index.html";
    });
});


formularioPagar.appendChild(divNombre);
formularioPagar.appendChild(divNumero);
formularioPagar.appendChild(divFecha);
formularioPagar.appendChild(divCCV);
formularioPagar.appendChild(botonPagar);