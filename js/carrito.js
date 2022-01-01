let carrito = [];
// let cartList = JSON.parse(localStorage.getItem('cart'));
// read();
drawCart()
// console.log(carrito);


function drawCart(){
    let listCart = JSON.parse(localStorage.getItem('cart'))
    console.log(listCart);

    for (let i in listCart){
        $('#cardTable').append(
            `
        <tr>
        <td>${listCart[i].codigo} </td>
        <td>${listCart[i].nombre} </td>
        <td>$${listCart[i].precio} </td>
        <td><button type="button" class="btn btn-danger btn-sm" id=${listCart[i].codigo} onclick="quitarDelCarrito(this)"><i class="far fa-trash-alt"></i></button></td>
        </tr>      
        `)
    }
    }

function agregarAlCarrito(btn) {
    $.getJSON('js/funkos.json', (response) => {
        response.filter((funkoAdd) => {
            // console.log(funko);
            if (funkoAdd.codigo == btn.id) {
                let newToCart = funkoAdd
                carrito.push(newToCart);
                console.log(newToCart)
                localStorage.setItem('cart', JSON.stringify(carrito));
            }
        })
        console.log(carrito);
    })

}

function quitarDelCarrito(btn) {
  
}




   
