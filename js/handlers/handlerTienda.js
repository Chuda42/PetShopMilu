/* importaciones */
import {compra} from '../clase/compra.js'
import {producto} from '../clase/producto.js'
import * as LOGIN from '../interfaces/login.js'
import * as CART from  '../interfaces/cart.js' 
import * as STORE from '../interfaces/store.js'

const {jQuery} = window.jQuery;
const $ = window.jQuery;

/* Main */

/* Stock */
const producto1 = new producto("Comida", "FrostSenior", "../media/img/comida_frost.png", 900, 1, "Comida de perro de alta calidad")
const producto2 = new producto("Collar", "DominalRosa", "../media/img/collarDominalRosa.png", 1555, 2, "collar anti pulgas de alta calidad, tamaño grande")


/* Fin de stock */

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





/* Esto se tiene que generar automatico para cada producto */
document.querySelector("#AgregarProducto-store-1").addEventListener("click", () => {
    if(LOGIN.hayUserIn()){
        let compra1 = new compra(producto1, 1);
        CART.setCompraCarritoSTORAGE(compra1);
        document.getElementById("pag-carrito-entrar").click()
    }else{
        document.querySelector("#login-entrar").click();
    }
    
})

document.querySelector("#AgregarProducto-store-2").addEventListener("click", () => {
    if(LOGIN.hayUserIn()){
        let compra2 = new compra(producto2, 1);
        CART.setCompraCarritoSTORAGE(compra2);
        document.getElementById("pag-carrito-entrar").click()
    }else{
        document.querySelector("#login-entrar").click();
    }
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

STORE.agregarTrjetaProducto(producto1, document.querySelector(".store-stock"));