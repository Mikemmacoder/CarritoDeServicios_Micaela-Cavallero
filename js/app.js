///Cotizá tu servicio de capacitación
///¿Cuántos encuentros queres contratar? Importante: El mínimo de encuentros a contratar son 3. los encuentros se realizan con una frecuencia de 15 días aproximadamente.
///¿Cuántas horas quisieras que dure cada encuentro? Importante: Lo mimímo que se puede contratar son 2 horas.
///¿Cuántas personas participarán de las capacitacitaciones?

alert("Te damos la bienvenida! Cotizá el servicio de capacitaciones que más de ajuste a tus necesidades.");

const precioHora = 7000;


let encuentros = parseInt(prompt("Ingrese el número de encuentros que quiere contratar. Importante: El mínimo de encuentros a contratar son 3."));
while (encuentros < 3) {
    alert("El número ingresado es inválido.");
    encuentros = parseFloat(prompt("Ingrese el número de encuentros que quiere contratar. Importante: El mínimo de encuentros a contratar son 3."));
}
let horas = parseInt(prompt("Ingrese el número de horas que durará cada encuentro. Importante: Lo minímo que se puede contratar son 2 horas."));
while (horas < 2) {
    alert("El número ingresado es inválido.");
    horas = parseFloat(prompt("Ingrese el número de horas que durará cada encuentro. Importante: Lo minímo que se puede contratar son 2 horas."));
}
let personas = parseFloat(prompt("Ingrese el número de personas que participarán de las capacitaciones."));
if (personas <= 0) {
    alert("El número ingresado es inválido.");
}

// Cálculo del costo

if (personas <= 2 ) {
    let resultado = encuentros * horas * precioHora;
    alert(`El costo total del servicio es de ${"$" + resultado}.`);
    alert('La presente cotización es a fines estimativos y está sujeta a modificaciones sin previo aviso.');
} else {
    let resultado = encuentros * horas * precioHora + (500 * personas);
alert(`El costo total del servicio es de ${ "$" + resultado}`);
alert('La presente cotización es a fines estimativos y está sujeta a modificaciones sin previo aviso.');
}




// Proceso de Datos
/*let imc = peso / (altura * altura); //Realizamos el cálculo del IMC
let mensaje = "";

// Validamos el IMC
if (imc < 18.5) {
    mensaje = "Peso inferior al normal";
} else if (imc >= 18.5 && imc <= 24.9) {
    mensaje = "Normal";
} else if (imc >= 25 && imc <= 29.9) {
    mensaje = "Peso superior al normal";
} else {
    mensaje = "Obesidad";
}

// Salida
//alert("Tu IMC es: " + imc.toFixed(2) + "%");
//alert("Tu condición de salud es: " + mensaje);
*/