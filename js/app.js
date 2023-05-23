let valorTotal = 0;
let precios = 0;
let botonVaciar = document.getElementById('vaciar-carrito-btn');
let botonComprar = document.getElementById('comprar-btn');
let carrito = [];
const servicios = [];

document.addEventListener('DOMContentLoaded', () => {
    let carritoLocal = JSON.parse(localStorage.getItem('carrito'));
    if (carritoLocal != null) {
        carrito = carritoLocal;
    }
    mostrarItemsCarrito();
    mostrarContadorCarrito();
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
            <img src="${servicio.imagen}" class="card-img-top">
            <p class="card-text">${'Modalidades: ' + servicio.modalidad}</p>
            <p class="card-text">${'Duración: ' + servicio.duracion + ' hora(s).'}<p>
            <p class="card-text">Precio por encuentro $ ${servicio.precio}</p>
            <button id="btn${servicio.id}" class="btn btn-primary comprar botones">Agregar al carrito</button>
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
            mostrarContadorCarrito();
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
            mostrarContadorCarrito();
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
            mostrarContadorCarrito();
        });

    })
    .catch((error) => {
        // Manejo de errores en caso de que no se pueda acceder al archivo "servicios.json"
        console.error("Error al obtener los datos del archivo servicios.json:", error);
    });

//funciones utilizadas al momento de agregar servicios al carrito
/* function agregarServicios(i){
    carrito.find ((el) => el.nombre === servicios[i].nombre) ? el.cantidad ++ : carrito.push(servicios[i]);
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
    calcularTotal();
    guardarCarrito();
    mostrarContadorCarrito();
} */


function mostrarItemsCarrito() {
    const tabla = document.getElementById('items');
    tabla.innerHTML = ``;
    let counter = 1;

    carrito.forEach((servicio) => {
        tabla.innerHTML += `
            <tr id='pepino'>
                <th>${counter}</th>
                <td> ${servicio.nombre} </td>
                <td>${servicio.cantidad}</td>
                <td>$ ${servicio.precio} </td>
                <td>$</td>
            </tr>
        `;
        counter++;
        console.log(tabla.innerHTML);
    });
}
function calcularPrecioParcial(a,b){
    return a *b;
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

function vaciarCarrito(){
    document.getElementById('items').innerHTML = ``;
    carrito = [];
    localStorage.clear();
    valorTotal = 0;
    const resultado = document.getElementById('total');
    resultado.innerHTML = `
    <h3>Total $0</h3>`;
    mostrarContadorCarrito();
}
//evento de vaciar carrito alclickear boton
botonVaciar.addEventListener("click", () => {
    vaciarCarrito();
    Swal.fire(
        {
            title: 'El carrito está vacío!',
            icon: 'warning'
        }
    );
});
//Crear boton carrito y funcion para mostrar el numero de items
let graficoCarrito = document.getElementById('graficoCarrito');
let graficoCarri = document.createElement('button');
graficoCarri.className = 'carroNum btn btn-primary';
graficoCarri.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
    class="bi bi-cart4" viewBox="0 0 16 16">
    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
    </svg>`;
graficoCarrito.append(graficoCarri);

function mostrarContadorCarrito() {
    graficoCarri.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
    class="bi bi-cart4" viewBox="0 0 16 16">
    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
    </svg>
    <span class="card-text">${carrito.length}</span>`;
}

//evento de comprar
botonComprar.addEventListener("click", () =>{
    carrito.length > 0 ?  Swal.fire({title: 'La compra se realizó con éxito!', text: 'El total de la compra finalizada fue de $' + valorTotal, icon: 'success'}) : Swal.fire({title: 'El carrito está vacío!', text: 'Seleccione los servicios a contratar.', icon: 'warning'});
    vaciarCarrito();
});