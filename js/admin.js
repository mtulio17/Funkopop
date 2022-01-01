let funkoList = [];

class Funko {
    constructor(codigo, nombre, precio, imagen) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }
}
const modalProducto = new bootstrap.Modal(document.getElementById('modalFunko'));

let btnAdd = document.getElementById('btnAdd');
btnAdd.addEventListener('click', function () {
    modalProducto.show();

})

getData();

function addFunko() {
    //Agregar validaciones
    let codigo = document.getElementById('codigo').value;
    let nombre = document.getElementById('nombre').value;
    let precio = document.getElementById('precio').value;
    let imagen = document.getElementById('imagen').value;


    let newFunko = new Funko(codigo, nombre, precio, imagen);

    funkoList.push(newFunko);

    localStorage.setItem('funkos', JSON.stringify(funkoList));
    getData();
    modalProducto.hide();
}

function getData() {
    if (localStorage.getItem('funkos') != null) {
        let _listadoFunko = JSON.parse(localStorage.getItem('funkos'))

        if (funkoList.length === 0) {
            funkoList = _listadoFunko;
        }
        drawTable(_listadoFunko);
    }
}

$.getJSON('js/funkos.json', (respuesta) => {
    console.log(respuesta);
    respuesta.forEach((funko) => {
        $('#tableFukos').append(
            `
            <tr>
            <td>${funko.codigo}</td>
             <td>${funko.nombre}</td>
             <td>${funko.precio}</td>
             <td>${funko.imagen}</td>
             <td>
                  <button type="button" class="btn btn-danger" onclick=${eliminarFunko(this)} id="${funko.codigo}">Eliminar</button>
             </td>
         </tr>
            `
        )
    });
})

function drawTable(productos) {
    let tableBody = document.getElementById('tableFukos');
    let fila = '';
    tableBody.innerHTML = '';

    for (let i in productos) {
        fila = `
    <tr>
        <td>${productos[i].codigo}</td>
         <td>${productos[i].nombre}</td>
         <td>${productos[i].precio}</td>
         <td>${productos[i].imagen}</td>
         <td>
              <button type="button" class="btn btn-danger" onclick="eliminarFunko(this)" id="${productos[i].codigo}">Eliminar</button>
         </td>
     </tr>
    `;
        tableBody.innerHTML += fila
    }

}

window.guardarFunko = function (event) {
    event.preventDefault();
    addFunko();
}

window.eliminarFunko = function (boton) {
    console.log(boton.id);

    let productosFiltrados = funkoList.filter(producto => producto.codigo != boton.id)

    console.log(productosFiltrados);

    localStorage.setItem('funkos', JSON.stringify(productosFiltrados));
    funkoList = productosFiltrados;

    getData();
}