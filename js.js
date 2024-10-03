console.log("Bienvenido/a a mi disqueria");

let disqueria = ["Hugo Fattoruso","Ruben Rada","Jaime Ross"];

let opcion = pedirValor();

while (opcion >= 0 && opcion <= 4) {
    console.log("Indicaste la opcion " + opcion);
    switch (opcion) {
        case 1:
            ingDisco();
            opcion = pedirValor();
            break;
        case 2:
            mostrarDiscos();
            opcion = pedirValor();
            break;
        case 3:
            discoXnombre();
            opcion = pedirValor();
            break;
        case 4:
            borrarDisco();
            opcion = pedirValor();
            break;
        case 0:
            alert("gracias :)");
            break;
        default:
            break;
    }
}

function pedirValor(){
    return parseInt(prompt("Ingrese la opción deseada: \n 1. Ingresar disco \n 2. Mostrar discos \n 3. Mostrar disco por nombre \n 4. Borrar disco \n 0. Salir"));
}

function ingDisco(){
    disqueria.push(prompt("Ingrese el nombre de un disco: "));
    console.log("El disco se ingreso exitosamente!!!");
}

function mostrarDiscos(){
    console.clear();
    console.log("Mostrando la lista de discos: \n");
    for (let i = 0; i < disqueria.length; i++) {
        console.log(disqueria[i]);
    }
}

function discoXnombre(){
    console.clear();
    mostrarDiscos();
    let encontrado = false;
    let disco;
    let posicion;
    let nombre = prompt("Ingresar el nombre de un disco y te dire el orden en la lista de discos: ");
    for (let i = 0; i < disqueria.length; i++) {
        if (nombre == disqueria[i]) {
            encontrado = true;
            disco = disqueria[i];
            posicion =  i + 1;
            break;
        }
    }
    if (encontrado) {
        console.log("El disco "+ disco + " esta en la posicion N° " + posicion); 
    }else{
        console.log("Su disco no se encuentra en nuestra disqueria");
    }
}

function borrarDisco(){
    let borrado = false;
    let borrar = prompt("Ingresar el nombre de un disco para borrarlo: ");
    for (let i = 0; i < disqueria.length; i++) {
        if (borrar == disqueria[i]) {
            disqueria.splice(i,1);
            borrado = true;
            break;
        }
    }
    if (borrado) {
        console.clear();
        mostrarDiscos();
        console.log("El disco "+ borrar +" se borro exitosamente!!!");
    }else{
        console.log("Su disco no se encuentra en nuestra disqueria");
    }
}