/* importaciones */
import * as LOGIN from '../interfaces/login.js'
import * as CART from  '../interfaces/cart.js' 

const {jQuery} = window.jQuery;
const $ = window.jQuery;

CART.initCarritoHTML(document.querySelector(".carrito-contenedor-compras") 
    ,document.querySelector("#totalMonto-num"));

document.querySelector("#logout-button").addEventListener("click", () => {
    LOGIN.logout();
})

