/* importaciones */
import * as LOGIN from '../interfaces/login.js'
import * as CART from  '../interfaces/cart.js' 
import {carritoView} from '../clase/carritoView.js'
import {factura} from '../clase/facturas.js'

/* jQuery */
const {jQuery} = window.jQuery;
const $ = window.jQuery;

/* html2canvas y jsPDF */
const { jsPDF } = window.jspdf;
const  html2canvas = window.html2canvas;

/* Variable globales */

let formaPago ="";

const app = new carritoView();

const routes = [
    {path: '/', action: 'renderCarrito'},
    {path: '/comprar', action: 'renderComprar'},
    {path: '/factura', action: 'renderFactura'}

]

const errorComponent = (padre) => {
    $(padre).html(`
    <div class = "contenedor">
        <div class ="contenido">
            <img src="../../media/img/404NotFound.png" alt="mily-triste">
            <h1>404 not found</h1>
        </div>
    </div>`);
}

const parseRoute = () => location.hash.slice(1).toLowerCase() || `/`

const findActionByPath = (path, routes) => routes.find(r => r.path == path || undefined)

const router = () => {
    const path = parseRoute();
    console.log(path);
    const { action = 'error' } = findActionByPath(path, routes) || {};
    console.log(action);
    switch (action) {
        case 'renderFactura':
            let carrito = CART.getCarrito();
            let fecha = new Date();
            let factura1 = new factura(carrito.user, carrito.compra, carrito.monto,formaPago,fecha, carrito.id);
            app.renderFactura($(".contenedor"),$(".contenedor-compra-factura"), factura1);
            /* Elimina los elementos del carrito */
            CART.getCarrito().compra.map(element => {
                CART.removeItemCarrito(element.id);
                $(`#com${element.id}`).fadeOut(500);
                $("#totalMonto-num").text(CART.getCarrito().monto)
            })

            /* Evento de descarga de la factura */
            $("#descargarFactura").click(()=>{
                html2canvas(document.querySelector(`#capture-${factura1.id}`)).then(function(canvas) {
                    const imgData = canvas.toDataURL("image/jpeg", 1);
                    const pdf = new jsPDF("p", "pt");
                    /* addImage tiene que tener si o si todos esos valores */
                    pdf.addImage(imgData, "JPEG", 0, 0, 595, 840);
                    pdf.save(`factura${factura1.id}.pdf`);      
                });
            })

            /* Funcion de deslogueo */
            document.querySelector("#logout-button").addEventListener("click", () => {
                LOGIN.logout();
            })
            break;
        case 'renderCarrito':
            app.renderCarrito($(".contenedor"),$(".contenedor-compra-factura"));
            CART.initCarritoHTML(document.querySelector(".carrito-contenedor-compras") 
                ,document.querySelector("#totalMonto-num"));

            /* Funcion de deslogueo */
            document.querySelector("#logout-button").addEventListener("click", () => {
                LOGIN.logout();
            })

            /* Arregla el monto del total cuando se remueve un producto */
            $(`h5`).on("click", ()=>{
                $("#totalMonto-num").text(CART.getCarrito().monto)
            });

            /* Evento del boton compra, si no hay productos controla de que no haga nada */
            $(`#carrito-comprar-btn-div`).on("click", (event)=>{
                let cartNow = CART.getCarrito();
                if(cartNow.compra.length == 0)
                    event.preventDefault();   
            })

            $(`#plusBtn`).on(`mouseenter`, ()=>{
                /* hacer una animación */
                $(`#plusBtn`).animate({top: '-20px',}, 200)
                .animate({top: '0px',}, 200)
                .animate({top: '-15px',}, 200)
                .animate({top: '0px',}, 200)
                .animate({top: '-10px',}, 200)
                .animate({top: '0px',}, 200)
                .animate({top: '-5px',}, 200)
                .animate({top: '0px',}, 200)
                .stop();
            })

            $(`#carrito-comprar-btn-div`).on(`mouseenter`, ()=>{
                /* hacer una animación */
                $(`#carrito-comprar-btn-div`).animate({top: '-10px',}, 200)
                .animate({top: '0px',}, 200)
                .animate({top: '-5px',}, 200)
                .animate({top: '0px',}, 200) 
            })
        
            break;
        case `renderComprar`:
            app.renderFormCompra($(".contenedor"),$(".contenedor-compra-factura"));
            $("#btnComprar").click((event)=> {
                if (!$("#input-titularFactura-name").val()|| $("#input-titularFactura-name").val() != JSON.parse(localStorage.getItem("userIN")).name ) 
                    event.preventDefault()
                else{
                    formaPago =$("#forma-pago-selector").val(); 
                }
            })
            /* Funcion de deslogueo */
            document.querySelector("#logout-button").addEventListener("click", () => {
                LOGIN.logout();
            })
            break;
        default:
            errorComponent($(".contenedor"))
            break;
    }
}//router

$(window).on("load", ()=> router())
$(window).on("hashchange", ()=> router())