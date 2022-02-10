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

$(`h5`).on("click", ()=>{
    $("#totalMonto-num").text(CART.getCarrito().monto)

});

$(`#plusBtn`).on(`mouseenter`, ()=>{
    /* hacer una animación */
    $(`#plusBtn`).animate({
        top: '-20px',
    }, 200)
    .animate({
        top: '0px',
    }, 200)
    .animate({
        top: '-15px',
    }, 200)
    .animate({
        top: '0px',
    }, 200)
    .animate({
        top: '-10px',
    }, 200)
    .animate({
        top: '0px',
    }, 200)
    .animate({
        top: '-5px',
    }, 200)
    .animate({
        top: '0px',
    }, 200)
    .stop();
})

$(`#carrito-comprar-btn-div`).on(`mouseenter`, ()=>{
    /* hacer una animación */
    $(`#carrito-comprar-btn-div`).animate({
        top: '-10px',
    }, 200)
    .animate({
        top: '0px',
    }, 200)
    .animate({
        top: '-5px',
    }, 200)
    .animate({
        top: '0px',
    }, 200) 
})

