// CARRITO VACÍO

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// FUNCIÓN AGREGAR PRODUCTOS

function agregarAlCarrito(nombre, precio){

    carrito.push({
        nombre: nombre,
        precio: precio
    });

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

    alert("🛒 Producto agregado al carrito");

}

// MOSTRAR PRODUCTOS EN carrito.html

if(document.getElementById("listaCarrito")){

    let lista =
        document.getElementById("listaCarrito");

    let total = 0;

    carrito.forEach(function(producto){

        let item =
            document.createElement("li");

        item.textContent =
            producto.nombre +
            " - L. " +
            producto.precio;

        lista.appendChild(item);

        total += producto.precio;

    });

    document.getElementById("total")
    .textContent =
    "Total: L. " + total;

}

// FINALIZAR COMPRA

function comprar(){

    let nombre =
        document.getElementById("nombre").value;

    let tarjeta =
        document.getElementById("tarjeta").value;

    let fecha =
        document.getElementById("fecha").value;

    let cvv =
        document.getElementById("cvv").value;

    if(nombre == "" ||
       tarjeta == "" ||
       fecha == "" ||
       cvv == ""){

        alert("Completa todos los campos");

    }else{

        alert("✨ Compra realizada con éxito ✨");

        // VACIAR CARRITO

        localStorage.removeItem("carrito");

        // RECARGAR PÁGINA

        document.getElementById("listaCarrito").innerHTML = "";

document.getElementById("total").textContent =
"Total: L. 0";

document.getElementById("nombre").value = "";

document.getElementById("tarjeta").value = "";

document.getElementById("fecha").value = "";

document.getElementById("cvv").value = "";

    }

}



// CONTACTO

function enviarMensaje(){

    let nombre =
        document.getElementById("nombre").value;

    let correo =
        document.getElementById("correo").value;

    let mensaje =
        document.getElementById("mensaje").value;

    if(nombre == "" ||
       correo == "" ||
       mensaje == ""){

        alert("Completa todos los campos");

    }else{

        alert("✨ Mensaje enviado correctamente ✨");

        // LIMPIAR CAMPOS

        document.getElementById("nombre").value = "";

        document.getElementById("correo").value = "";

        document.getElementById("mensaje").value = "";

    }

}