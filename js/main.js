function calcularTotal() {
    var cantidad = parseInt(document.getElementById("cantidad").value);
    var categoria = document.getElementById("categoria").value;

    var valorEntrada = 200;
    var descuento = 0;

    if (categoria === "estudiante") {
        descuento = 0.8;
    } else if (categoria === "trainee") {
        descuento = 0.5;
    } else if (categoria === "junior") {
        descuento = 0.15;
    }

    var total = cantidad * valorEntrada * (1 - descuento);

    document.getElementById("total").textContent = "$" + total.toFixed(2);
}

function borrarFormulario() {
    document.getElementById("formulario").reset();
    document.getElementById("total").textContent = "-";
}

function generarResumen() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var cantidad = document.getElementById("cantidad").value;
    var categoria = document.getElementById("categoria").value;
    var total = document.getElementById("total").textContent;

    var resumen = "Resumen de la Compra:\n\n";
    resumen += "Nombre: " + nombre + "\n";
    resumen += "Apellido: " + apellido + "\n";
    resumen += "Email: " + email + "\n";
    resumen += "Cantidad de Entradas: " + cantidad + "\n";
    resumen += "Categoría: " + categoria + "\n";
    resumen += "Total a Pagar: " + total + "\n";

    alert(resumen);
}