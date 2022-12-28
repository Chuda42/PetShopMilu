//import {factura} from './js/clase/facturas.js'
import * as LOGIN from './js/interfaces/login.js'
import * as CART from  './js/interfaces/cart.js'
const {jQuery} = window.jQuery;
const $ = window.jQuery;

/* Main */

//Inicializaciones
LOGIN.initRegistroUsers();
LOGIN.initUserIn();



// Arreglo de la barra de navegación, según si hay o no usuario logueado
if(LOGIN.hayUserIn()){
    CART.initCarritoSTORAGE();

    /* Se ve */
    $("#pag-logout").show();
    $("#pag-carrito").show();

    /* No se ve */
    $("#pag-carrito-login").hide();
    $("#pag-login").hide()

}else{
    /* Se ve */
    $("#pag-carrito-login").show();
    $("#pag-login").show()
    /* No se ve */
    $("#pag-logout").hide();
    $("#pag-carrito").hide();

    
}

// evento logout 
document.querySelector("#logout-button").addEventListener("click", () => {
    LOGIN.logout();
})

// Evento si abren el login en otra ventana
$(window).on("storage", ()=>{
    if(LOGIN.hayUserIn()){
        CART.initCarritoSTORAGE();
    
        /* Se ve */
        $("#pag-logout").show();
        $("#pag-carrito").show();
    
        /* No se ve */
        $("#pag-carrito-login").hide();
        $("#pag-login").hide()
    
    }else{
        /* Se ve */
        $("#pag-carrito-login").show();
        $("#pag-login").show()
        /* No se ve */
        $("#pag-logout").hide();
        $("#pag-carrito").hide();
    
        
    }
})

