import {user} from './js/clase/user.js'
import {producto} from './js/clase/producto.js'
import {compra} from './js/clase/compra.js'

//import {factura} from './js/clase/facturas.js'
import * as LOGIN from './js/interfaces/login.js'
import * as CART from  './js/interfaces/cart.js'

/* Main */

//Inicializaciones
LOGIN.initRegistroUsers();
LOGIN.initUserIn();
if(LOGIN.hayUserIn()){
    CART.initCarritoSTORAGE();

    if(CART.getCarrito().compra != [])
        CART.initCarritoHTML(document.querySelector(".carrito-contenedor-compras"), document.querySelector("#totalMonto-num"));



    if(document.querySelector(".carrito-contenedor") != undefined){
        document.querySelector("#plusBtn").addEventListener("click", ()=>{
            let nameProduct = prompt("nombre");
            let model = prompt("model");
            let img = prompt("img");
            let price = prompt("price");
            let id = prompt("id");

            let producto1 = new producto(nameProduct, model, img, price, id);
            let compra1 = new compra(producto1, 1);
            CART.setCompraCarritoSTORAGE(compra1);
            CART.setCompraCarritoHTML(document.querySelector(".carrito-contenedor-compras"), compra1);
            CART.udatePrecioHTML(document.querySelector("#totalMonto-num"), compra1.monto);
        })
    }   
}



