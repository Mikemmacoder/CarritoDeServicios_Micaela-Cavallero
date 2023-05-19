let valorTotal = 0;
let precios = 0;
let botonVaciar = document.getElementById('vaciar-carrito-btn');
let carrito = [];
const servicios = [];

document.addEventListener('DOMContentLoaded', () => {
    let carritoLocal = JSON.parse(localStorage.getItem('carrito'));
    if (carritoLocal != null) {
        carrito = carritoLocal;
    }
    mostrarItemsCarrito();
});

fetch("js/servicios.json")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        //Traigo los objetos del json a un array en js 
        for (let servicio of data) {
            servicios.push(servicio)
        }

        // Creo tarjetas por cada servicio
        let articuloCartas = document.getElementById('cartas');
        for (let servicio of data) {
            let carta = document.createElement('div');
            carta.className = 'card col-md-3 col-sm-5 cartaServicio';
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
        //Tomo control de los botones html
        let boton1 = document.getElementById('btn1');
        let boton2 = document.getElementById('btn2');
        let boton3 = document.getElementById('btn3');
        //Muestro el resultado total de la compra en html
        const resultado = document.getElementById('total');
        resultado.innerHTML = `<h3>Total $0</h3>`;
        //Eventos para que al clickear el boton, se agreguen los servicios al carrito
        boton1.addEventListener("click", () => {
            carrito.push(servicios[0]);
            Swal.fire(
                {
                    title: 'Se agregó el servicio al carrito!',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500,
                }
            );
            console.table(carrito);
            mostrarItemsCarrito();
            calcularTotal()
            guardarCarrito()
        });
        boton2.addEventListener("click", () => {
            carrito.push(servicios[1]);
            Swal.fire(
                {
                    title: 'Se agregó el servicio al carrito!',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500,
                }
            );
            console.table(carrito);
            mostrarItemsCarrito();
            calcularTotal()
            guardarCarrito()
        });
        boton3.addEventListener("click", () => {
            carrito.push(servicios[2]);
            Swal.fire(
                {
                    title: 'Se agregó el servicio al carrito!',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500,
                }
            );
            console.table(carrito);
            mostrarItemsCarrito();
            calcularTotal()
            guardarCarrito()
        });

    })
    .catch((error) => {
        // Manejo de errores en caso de que no se pueda acceder al archivo "servicios.json"
        console.error("Error al obtener los datos del archivo servicios.json:", error);
    });

//funciones utilizadas al momento de agregar servicios al carrito

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
//almacenar el carrito en el localStorage
function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}
//evento de vaciar carrito alclickear boton
botonVaciar.addEventListener("click", () => {
    document.getElementById('items').innerHTML = ``;
    carrito = [];
    localStorage.clear();
    valorTotal = 0;
    const resultado = document.getElementById('total');
    resultado.innerHTML = `
    <h3>Total $0</h3>`;
    Swal.fire(
        {
            title: 'El carrito está vacío!',
            icon: 'warning'
        }
    );
});