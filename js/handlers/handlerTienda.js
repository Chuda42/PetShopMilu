/* importaciones */
import {compra} from '../clase/compra.js'
import {producto} from '../clase/producto.js'
import{stock} from '../clase/stock.js'
import * as LOGIN from '../interfaces/login.js'
import * as CART from  '../interfaces/cart.js' 
import * as STORE from '../interfaces/store.js'

const {jQuery} = window.jQuery;
const $ = window.jQuery;

/* Main */


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

document.querySelector("#logout-button").addEventListener("click", () => {
    LOGIN.logout();
})


// evento si abre el login en otra ventana
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

/* Se crea el stock */
const stock1 = new stock()
/* Se agregan los productos */
stock1.agregarTarjetasHTML($("#store-stock"))

//STORE.agregarTrjetaProducto(producto1, document.querySelector(".store-stock"));