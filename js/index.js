$(document).ready(function () {
    // Ya cargados
    $.getJSON('js/funkos.json', (respuesta, status) => {
        if (status === 'success') {
            respuesta.forEach((funkoj) => {
                $('#cardFunko').append(
                    `
                    <div class="col-sm-12 col-md-3" >
                    <div class="card my-3 text-dark bg-ligth" id="cardItem" >
                      <img src="${funkoj.imagen}" class="card-img-top" alt="${funkoj.imagen}">
                      <div class="card-body">
                         <h5 class="card-title"><strong>${funkoj.nombre}</strong></h5>
                         <hr class="color2">
                         <p class="card-text"><strong>$${funkoj.precio}</strong></p>
                         <button class="btn bg1 color1" id=${funkoj.codigo} onclick="agregarAlCarrito(this)">Agregar al Carrito</button>
                     </div>
                   </div>
               </div>
                    `
                )
            });
        } else {
            $('#cardFunko').append(
                `
            <div class="alert alert-warning my-5" role="alert">
            Ups! No hay Funkos disponibles en este momento. Vuelve a intentarlo mas tarde.
          </div>
            `);
        }
        if (localStorage.getItem('funkos')) {
            funkoList = JSON.parse(localStorage.getItem('funkos'))
            // console.log(funkoList);
            funkoList.forEach((funko) => {
                $('#cardFunkoNew').append(
                    `
                <div class="col-sm-12 col-md-3" >
                <div class="card my-3 text-dark bg-ligth" id="cardItem" >
                  <img src="/img/productos/${funko.imagen}" class="card-img-top" alt="${funko.imagen}">
                  <div class="card-body">
                     <h5 class="card-title"><strong>${funko.nombre}</strong></h5>
                     <hr class="color2">
                     <p class="card-text"><strong>$${funko.precio}</strong></p>
                     <button class="btn bg1 color1" id="alCarrito">Agregar al Carrito</button>
                 </div>
               </div>
           </div>
                `)
            });
        }

        console.log(respuesta);
    });

});
