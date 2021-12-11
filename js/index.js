// function showFunkos() {
//     if (localStorage.getItem('funkos') != null) {
//         funkoList = JSON.parse(localStorage.getItem('funkos'))
//         console.log(funkoList);
//         const padreCard = document.getElementById('cardFunkoNew');
//         padreCard.innerHTML = '';

//         for (let i = 0; i < funkoList.length; i++) {

//             let card = `
//            <div class="col-sm-12 col-md-3" >
//                 <div class="card my-3 text-dark bg-ligth" id="cardItem" >
//                   <img src="/img/productos/${funkoList[i].imagen}" class="card-img-top" alt="${funkoList[i].imagen}">
//                   <div class="card-body">
//                      <h5 class="card-title">${funkoList[i].nombre}</h5>
//                      <p class="card-text"><strong>$${funkoList[i].precio}</strong></p>
//                      <a href="/error.html" class="btn btn-primary">Agregar al Carrito</a>
//                  </div>
//                </div>
//            </div>
           
//             `;
//             padreCard.innerHTML += card
//         }
//     } else {
//         const padreCard = document.getElementById('cardFunko');

//         let error = `
//         <div class="alert alert-warning my-5" role="alert">
//           Ups! No hay Funkos disponibles en este momento. Vuelve a intentarlo mas tarde.
//         </div>
//         `;
//         padreCard.innerHTML += error
//     }
// }
// showFunkos();

//Con Jquery

$(document).ready(function () {
    // Ya cargados
    $.getJSON('js/funkos.json', (respuesta, status) => {
        if (status === 'success') {
            respuesta.forEach((funko) => {
                $('#cardFunko').append(
                    `
                    <div class="col-sm-12 col-md-3" >
                    <div class="card my-3 text-dark bg-ligth" id="cardItem" >
                      <img src="${funko.imagen}" class="card-img-top" alt="${funko.imagen}">
                      <div class="card-body">
                         <h5 class="card-title"><strong>${funko.nombre}</strong></h5>
                         <hr class="color2">
                         <p class="card-text"><strong>$${funko.precio}</strong></p>
                         <button href="/error.html" class="btn bg1 color1" id="alCarrito">Agregar al Carrito</button>
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
            console.log(funkoList);
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
                     <button href="/error.html" class="btn bg1 color1" id="alCarrito">Agregar al Carrito</button>
                 </div>
               </div>
           </div>
                `)
            });
        }

        console.log(respuesta);
    });

});