/* IMPORTACIONES */
import {producto} from '../clase/producto.js'

export const agregarTrjetaProducto = (producto, nodo) => {
    const id = producto.id;

     let divProducto = document.createElement("div");
    divProducto.className = "producto-card";

    $(divProducto).append(
        `<div class="producto-card-img">` +
                        `<img src="../media/img/comida_frost.png" alt="Producto-${id}">`+
                    `</div>` +
                    `<div class="producto-card-info">`+
                        `<ul>`+
                            `<li><h4>Nombre:</h4>Comida</li>` +
                           ` <li><h4>Modelo:</h4> FrostSenior</li>` +
                            `<li><h4>Descripcion:</h4> Comida de alta calidad </li>` +
                            `<li><h4>Precio:</h4> 900</li>` +
                            `<li><h4>Descuento:</h4> 15%</li>` +
                        `</ul>` +
                    `</div>` +
                    `<div class="producto-card-botonAgregarCarrito">` +
                        `<button id ="AgregarProducto-store-1">Agregar al Carrito</button>` +
                   ` </div>` +
                `</div>`
    )

    nodo.appendChild(divProducto);
    
}