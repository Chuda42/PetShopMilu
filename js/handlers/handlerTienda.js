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

const stock1 = new stock()

stock1.agregarTarjetasHTML($("#store-stock"))
console.log($(`#AgregarProducto-store-2`));
console.log($(`#AgregarProducto-store-3`));





//STORE.agregarTrjetaProducto(producto1, document.querySelector(".store-stock"));