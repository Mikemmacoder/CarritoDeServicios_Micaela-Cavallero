function multiplicar(a, b) {
    return a * b;
}

const sedes = ["Córdoba", "Mendoza", "Buenos Aires", "Bariloche"];
let resultado = 0;
let precioHora = 7500;

const servicios = [
    {
        nombre: "Coaching personal",
        modalidad: { presencial: sedes, virtual: true },
        duracion: 1,
        minimo: 3,
    },
    {
        nombre: "Coaching de parejas",
        modalidad: { presencial: sedes, virtual: true },
        duracion: 1,
        minimo: 3,
    },
    {
        nombre: "Coaching de equipos",
        modalidad: { presencial: sedes, virtual: true },
        duracion: "minimo 2",
        minimo: 3,
    },
];

// Mostrar el menú de opciones
let opciones = "";
for (let i = 0; i < servicios.length; i++) {
    opciones += `${i + 1}. ${servicios[i].nombre}\n`;
}
const opcionSeleccionada = prompt(`Seleccione el servicio que desea contratar:\n${opciones}`);

// Convertir el valor ingresado por el usuario a un número entero
const indiceSeleccionado = parseInt(opcionSeleccionada) - 1;

// Verificar que el valor ingresado sea válido
if (isNaN(indiceSeleccionado) || indiceSeleccionado < 0 || indiceSeleccionado >= servicios.length) {
    alert("La opción seleccionada no es válida");
} else {
    // Mostrar los detalles del servicio seleccionado
    const servicioSeleccionado = servicios[indiceSeleccionado];
    alert(`Usted ha seleccionado el servicio "${servicioSeleccionado.nombre}".\nDuración: ${servicioSeleccionado.duracion} hora(s) cada encuentro\nSe puede realizar tanto de manera virtual como presencial en nuestras sedes en ${sedes}\nPara garantizar resultados, el mínimo de encuentros a contratar son: ${servicioSeleccionado.minimo}`);
}

const servicioSeleccionado = servicios[indiceSeleccionado];

let encuentros = parseInt(prompt("Cotizador del servicio\nIngrese el número de encuentros que quiere contratar. Importante: El mínimo de encuentros a contratar son 3"));
while (encuentros < 3 || isNaN(encuentros)) {
    alert("El número ingresado es inválido.");
    encuentros = parseInt(prompt("Ingrese el número de encuentros que quiere contratar. Importante: El mínimo de encuentros a contratar son 3."));
}

if (indiceSeleccionado == 2) {
    let horas = parseInt(prompt("Ingrese el número de horas que durará cada encuentro. Importante: Lo minímo que se puede contratar son 2 horas."));
    while (horas < 2 || isNaN(horas)) {
        alert("El número ingresado es inválido.");
        horas = parseInt(prompt("Ingrese el número de horas que durará cada encuentro"));
    }
    let personas = parseInt(prompt("Ingrese el número de personas que participarán de las capacitaciones."));
    while (personas <= 0 || isNaN(personas)) {
        alert("El número ingresado es inválido.");
        personas = parseInt(prompt("Ingrese el número de personas que participarán de las capacitaciones."));
    }
    if (personas <= 5) {
    resultado = encuentros * horas * precioHora;
    alert(`Usted ha cotizado el servicio "${servicioSeleccionado.nombre}" por ${encuentros} encuentros, para ${personas} personas. El costo total es de $${resultado}.`);
    } else {
    resultado = encuentros * horas * precioHora + (500 * personas);
    alert(`Usted ha cotizado el servicio "${servicioSeleccionado.nombre}" por ${encuentros} encuentros, para ${personas} personas. El costo total es de $${resultado}.`);
    }
}else {
    alert(`Usted ha cotizado el servicio "${servicioSeleccionado.nombre}" por ${encuentros} encuentros. El costo total es de $${multiplicar(precioHora,encuentros)}.`);
}

alert('La presente cotización es a fines estimativos y está sujeta a modificaciones sin previo aviso.');