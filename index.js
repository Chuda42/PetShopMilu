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

    let producto2 = new producto("perro", "pug", "#", 99, 0);
    let producto3 = new producto("gato", "tom", "#", 991, 1);;
    let producto4 = new producto("raton", "jerry", "#", 199, 3);;

    let compra2 = new compra(producto2);
    let compra3 = new compra(producto3);
    let compra4 = new compra(producto4);

    CART.setCompraCarritoSTORAGE(compra2);
    CART.setCompraCarritoSTORAGE(compra3);
    CART.setCompraCarritoSTORAGE(compra4);

    CART.initCarritoHTML(document.querySelector(".carrito-contenedor-compras"), document.querySelector("#totalMonto-num"));



    if(document.querySelector(".carrito-contenedor") != undefined){
        document.querySelector(".carrito-contenedor-boton").addEventListener("click", ()=>{
            let nameProduct = prompt("nombre");
            let model = prompt("model");
            let img = prompt("img");
            let price = prompt("price");
            let id = prompt("id");

            let producto1 = new producto(nameProduct, model, img, price, id);
            let compra1 = new compra(producto1);
            CART.setCompraCarritoHTML(document.querySelector(".carrito-contenedor-compras"), compra1);
            CART.udatePrecioHTML(document.querySelector("#totalMonto-num"), compra1.monto);
        })
    }




    
}

/* Registrarse con los input */
let registrarse = document.querySelector(".contenedor-register-boton")
if (registrarse != undefined){
    registrarse.addEventListener("click", LOGIN.registrarNewUser);
    document.addEventListener(`keydown`, (event) => {
        if (event.key == "Enter"){
            registrarse.click();
        }
    });
}
    


let loginV = document.querySelector(".contenedor-login-boton");
if(loginV != undefined){
    loginV.addEventListener("click", LOGIN.login);
    document.addEventListener('keydown', (event) => {
        if (event.key == "Enter"){
            loginV.click();
        }
    });
}

let usuario2= new user();
console.log(usuario2);
