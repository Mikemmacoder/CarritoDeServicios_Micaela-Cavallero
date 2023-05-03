const modalidadServicio = ['Presencial', 'Virtual'];
let valorTotal = 0;
let precios = 0;
let botonVaciar = document.getElementById('vaciar-carrito-btn');
let carrito = [];

document.addEventListener('DOMContentLoaded', () => {
    let carritoLocal = JSON.parse(localStorage.getItem('carrito'));
    if (carritoLocal != null) {
        carrito = carritoLocal;
    }
    mostrarItemsCarrito();
});

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
const servicio3 = new Servicios(3, 'Coaching grupal', modalidadServicio, 4, 3, 30000);

const servicios = [servicio1, servicio2, servicio3];

let articuloCartas = document.getElementById('cartas');
for (servicio of servicios) {
    let carta = document.createElement('div');
    carta.className = 'card col-md-4';
    carta.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">${servicio.nombre}</h5>
            <p class="card-text">${'Modalidades: ' + servicio.modalidad}</p>
            <p class="card-text">${'Duración: ' + servicio.duracion + ' hora(s).'}<p>
            <p class="card-text">Precio por encuentro $ ${servicio.precio}</p>
            <button id="btn${servicio.id}" class="btn btn-primary comprar">Comprar</button>
        </div>`;
    articuloCartas.append(carta);
}

let boton1 = document.getElementById('btn1');
let boton2 = document.getElementById('btn2');
let boton3 = document.getElementById('btn3');

const resultado = document.getElementById('total');
    resultado.innerHTML = `
    <h3>Total $0</h3>`;

boton1.addEventListener("click", () => {
    carrito.push(servicio1);
    alert('Se agregó el servicio al carrito!');
    console.table(carrito);
    mostrarItemsCarrito();
    calcularTotal()
    guardarCarrito()
});
boton2.addEventListener("click", () => {
    carrito.push(servicio2);
    alert('Se agregó el servicio al carrito!');
    console.table(carrito);
    mostrarItemsCarrito();
    calcularTotal()
    guardarCarrito()
});
boton3.addEventListener("click", () => {
    carrito.push(servicio3);
    alert('Se agregó el servicio al carrito!');
    console.table(carrito);
    mostrarItemsCarrito();
    calcularTotal()
    guardarCarrito()
});

function mostrarItemsCarrito() {
    const tabla = document.getElementById('items');
    tabla.innerHTML = ``;
    let counter = 1;

    carrito.forEach((servicio) => {
        tabla.innerHTML += `
            <tr id='pepino'>
                <th>${counter}</th>
                <td> ${servicio.nombre} </td>
                <td>$ ${servicio.precio} </td>
            </tr>
        `;
        counter++;
        console.log(tabla.innerHTML);
    });
}

function calcularTotal() {
    let serTotal = carrito.map((servicio) => servicio.precio)
    console.log(serTotal);
    valorTotal = serTotal.reduce((acumulador, elemento) => acumulador + elemento, 0)
    
    const resultado = document.getElementById('total');
    resultado.innerHTML = ``;
    resultado.innerHTML += `
        <h3>Total $ ${valorTotal}</h3>`
}
function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

botonVaciar.addEventListener("click", () => {
    document.getElementById('items').innerHTML = ``;
    carrito = [];
    localStorage.clear();
    valorTotal = 0;
    const resultado = document.getElementById('total');
    resultado.innerHTML = `
    <h3>Total $0</h3>`;
});