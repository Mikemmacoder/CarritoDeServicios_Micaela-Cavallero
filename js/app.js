function multiplicar(a, b) {
    return a * b;
}

const modalidadServicio = ['presencial', 'virtual'];
const sedes = ["Córdoba", "Mendoza", "Buenos Aires", "Bariloche"];
let resultado = 0;
let encuentros = 0;
let horas = 0;
let personas = 0;

class Servicios {
    constructor(id, nombre, modalidad, duracion, minimo, precio) {
        this.id = id;
        this.nombre = nombre;
        this.modalidad = modalidad;
        this.duracion = duracion;
        this.minimo = minimo;
        this.precio = precio
    }
    mostrarServicio() {
        alert(this.id + '-' + this.nombre + ' se realiza en las modalidades ' + this.modalidad + '.\n' +
            'Cada encuentro tiene una duración de ' + this.duracion + ' hora(s)\n' +
            'El mínimo de encuentros a contratar son ' + this.minimo);
    }
}
const servicio1 = new Servicios(1, 'Coaching personal', modalidadServicio, 1, 3, 4000);
const servicio2 = new Servicios(2, 'Coaching de parejas', modalidadServicio, 1, 3, 6000);
const servicio3 = new Servicios(3, 'Coaching grupal', modalidadServicio, 2, 3, 7500);

const servicios = [servicio1, servicio2, servicio3];
//Preguntar si quiere conocer los servicios
let desea1 = prompt('Hola! ¿Quieres conocer sobre nuestros servicios?\nSI: escriba s\nNO: escriba n');
if (desea1.toLowerCase() == 's') {
    //Mostrar los servicios
    servicios.forEach((servi) => {
        servi.mostrarServicio();
    })
    //Preguntar si desea cotizar un servicio
    let desea = prompt('¿Desea cotizar un servicio? \nSI: escriba s\nNO: escriba n');
    if (desea.toLowerCase() == 's') {
        //Seleccionar el servicio a cotizar
        let opcion = prompt('Seleccione el servicio que desea cotizar:\n' +
            servicio1.id + '-' + servicio1.nombre + '\n' +
            servicio2.id + '-' + servicio2.nombre + '\n' +
            servicio3.id + '-' + servicio3.nombre);
        //Verificar número
        while (isNaN(opcion) || opcion < 1 || opcion > servicios.length) {
            alert("El número ingresado es inválido. Elija un número correspondiente al servicio que quiera cotizar");
            opcion = prompt('Seleccione el servicio que desea cotizar:\n' +
                servicio1.id + '-' + servicio1.nombre + '\n' +
                servicio2.id + '-' + servicio2.nombre + '\n' +
                servicio3.id + '-' + servicio3.nombre);
        }
        //Ingresar datos para cotización según el servicio
        if (opcion == servicio1.id) {
            alert(`Usted ha seleccionado el servicio "${servicio1.nombre}".\nDuración: ${servicio1.duracion} hora cada encuentro\nSe puede realizar tanto de manera virtual como presencial en nuestras sedes en ${sedes}\nPara garantizar resultados, el mínimo de encuentros a contratar son: ${servicio1.minimo}`);
            encuentros = parseInt(prompt("Cotizador del servicio\nIngrese el número de encuentros que quiere cotizar. \nImportante: El mínimo de encuentros a contratar son" + servicio1.minimo));
            while (encuentros < servicio1.minimo || isNaN(encuentros)) {
                alert("El número ingresado es inválido.");
                encuentros = parseInt(prompt("Ingrese el número de encuentros que quiere contratar. Importante: El mínimo de encuentros a contratar son " + servicio1.minimo));
            }
            resultado = multiplicar(encuentros, servicio1.precio);
            alert(`Usted ha cotizado el servicio ${servicio1.nombre} por ${encuentros} encuentros. El costo total es de $${resultado}.`);
        }
        if (opcion == servicio2.id) {
            alert(`Usted ha seleccionado el servicio "${servicio2.nombre}".\nDuración: ${servicio2.duracion} hora cada encuentro\nSe puede realizar tanto de manera virtual como presencial en nuestras sedes en ${sedes}\nPara garantizar resultados, el mínimo de encuentros a contratar son: ${servicio2.minimo}`);
            encuentros = parseInt(prompt("Cotizador del servicio\nIngrese el número de encuentros que quiere cotizar. \nImportante: El mínimo de encuentros a contratar son" + servicio2.minimo));
            while (encuentros < servicio2.minimo || isNaN(encuentros)) {
                alert("El número ingresado es inválido.");
                encuentros = parseInt(prompt("Ingrese el número de encuentros que quiere contratar. Importante: El mínimo de encuentros a contratar son" + servicio2.minimo));
            }
            resultado = multiplicar(encuentros, servicio2.precio);
            alert(`Usted ha cotizado el servicio ${servicio2.nombre} por ${encuentros} encuentros. El costo total es de $${resultado}.`);
        }
        if (opcion == servicio3.id) {
            alert(`Usted ha seleccionado el servicio "${servicio3.nombre}".\nSe puede realizar tanto de manera virtual como presencial en nuestras sedes en ${sedes}\nPara garantizar resultados, el mínimo de encuentros a contratar son: ${servicio3.minimo}`);
            encuentros = parseInt(prompt("Cotizador del servicio\nIngrese el número de encuentros que quiere cotizar. \nImportante: El mínimo de encuentros a contratar son" + servicio3.minimo));
            while (encuentros < servicio3.minimo || isNaN(encuentros)) {
                alert("El número ingresado es inválido.");
                encuentros = parseInt(prompt("Ingrese el número de encuentros que quiere contratar. Importante: El mínimo de encuentros a contratar son" + servicio3.minimo));
            }
            horas = parseInt(prompt("Ingrese el número de horas que durará cada encuentro. Importante: Lo minímo que se puede contratar son " + servicio3.minimo));
            while (horas < servicio3.duracion || isNaN(horas)) {
                alert("El número ingresado es inválido.");
                horas = parseInt(prompt("Ingrese el número de horas que durará cada encuentro"));
            }
            personas = parseInt(prompt("Ingrese el número de personas que participarán de las capacitaciones."));
            while (personas <= 0 || isNaN(personas)) {
                alert("El número ingresado es inválido.");
                personas = parseInt(prompt("Ingrese el número de personas que participarán de las capacitaciones."));
            }
            if (personas <= 5) {
                resultado = encuentros * horas * servicio3.precio;
                alert(`Usted ha cotizado el servicio "${servicio3.nombre}" por ${encuentros} encuentros, para ${personas} personas. El costo total es de $${resultado}.`);
            } else {
                resultado = encuentros * horas * servicio3.precio + (500 * personas);
                alert(`Usted ha cotizado el servicio "${servicio3.nombre}" por ${encuentros} encuentros de ${horas} horas, para ${personas} personas. \nEl costo total es de $${resultado}.`);
            }
        }
    }
    //Mensaje legal
    alert('La presente cotización es a fines estimativos y está sujeta a modificaciones sin previo aviso.\nGracias por visitarnos.');
    if (desea.toLowerCase() == 'n') {
        alert('Gracias por visitarnos!');
    } else {
        while (desea.toLowerCase() != 's' && desea.toLowerCase != 'n') {
            alert('La opción ingresada no es válida. Por favor, seleccione s o n');
            desea = prompt('¿Desea cotizar un servicio? \nSI: escriba s\nNO: escriba n');
        }
    }
} if (desea1.toLowerCase() == 'n') {
    alert('Gracias por visitarnos!');
} else {
    while (desea1.toLowerCase() != 's' && desea1.toLowerCase != 'n') {
        alert('La opción ingresada no es válida. Por favor, seleccione s o n');
        desea1 = prompt('¿Quieres conocer sobre nuestros servicios? \nSI: escriba s\nNO: escriba n');
    }
}





