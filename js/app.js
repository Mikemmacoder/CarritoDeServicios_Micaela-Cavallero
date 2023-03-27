alert("Te damos la bienvenida! Cotizá el servicio de capacitaciones que más de ajuste a tus necesidades.");

const precioHora = 7000;

let encuentros = parseInt(prompt("Ingrese el número de encuentros que quiere contratar. Importante: El mínimo de encuentros a contratar son 3."));
while (encuentros < 3 || isNaN(encuentros)) {
    alert("El número ingresado es inválido.");
    encuentros = parseFloat(prompt("Ingrese el número de encuentros que quiere contratar. Importante: El mínimo de encuentros a contratar son 3."));
}

let horas = parseInt(prompt("Ingrese el número de horas que durará cada encuentro. Importante: Lo minímo que se puede contratar son 2 horas."));
while (horas < 2 || isNaN(horas)) {
    alert("El número ingresado es inválido.");
    horas = parseInt(prompt("Ingrese el número de horas que durará cada encuentro. Importante: Lo minímo que se puede contratar son 2 horas."));
}

let personas = parseInt(prompt("Ingrese el número de personas que participarán de las capacitaciones."));
while (personas <= 0 || isNaN(personas)) {
    alert("El número ingresado es inválido.");
    personas = parseInt(prompt("Ingrese el número de personas que participarán de las capacitaciones."));
}

// Cálculo del costo
let resultado;
if (personas <= 2 ) {
    resultado = encuentros * horas * precioHora;
} else {
    resultado = encuentros * horas * precioHora + (500 * personas);
}
alert(`El costo total del servicio es de ${"$" + resultado}.`);
alert('La presente cotización es a fines estimativos y está sujeta a modificaciones sin previo aviso.');

