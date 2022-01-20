/* importaciones */
import {user} from '../clase/user.js';
import {carrito} from '../clase/carrito.js';
import {producto} from '../clase/producto.js';
import {compra} from '../clase/compra.js';
import * as LOGIN from './login.js';


/* Funciones */

/* Crea un carrito y lo guarda en una variable en el storage con la key "carrito" */
export const initCarritoSTORAGE = () =>{
    let user = LOGIN.getUserIn();
    //Instancio el carrito con el user logueado, lo guardo en el storage
    let cart = new carrito(user);
    localStorage.setItem('carrito', JSON.stringify(cart));
}

/* Retorna el objeto tipo carrito con la información guardada en el storage con la clave "carrito" */
export const getCarrito = ()=>{
    let carritoJSON = JSON.parse(localStorage.getItem('carrito'));
    let resultado = new carrito();
    resultado.copiarInstancia(carritoJSON);

    //Convertir resultado.user en objeto de tipo user
    let newUser = new user();
    newUser.copiarInstancia(resultado.getUser());
    resultado.setUser(newUser);

    //convertir resultado.compra en una lista de tipo compra
    let auxiliar = resultado.getCompra().map((value) => {
        let itemTProducto = new compra();
        itemTProducto.copiarInstancia(value);
        value = itemTProducto;
        return value;  
    });
    resultado.setCompra(auxiliar);
    return resultado; 
}

/* Agregar Producto al carrito en el Storage y suma el costo
Precondición hay un carrito en el storage*/
export const setCompraCarritoSTORAGE = (compra) =>{
    let cart = getCarrito();
    cart.agregarCompra(compra);
    localStorage.setItem("carrito", JSON.stringify(cart));
}

export const setCompraCarrito = (producto) =>{
    //agrego el producto al storage;
    setCompraCarritoSTORAGE(producto);
    
    //Agrego el monto del carrito al HTML
    let carrito = getCarrito();
    let total = document.querySelector(".cart-info-total");
    total.textContent = `Total: ${carrito.getMonto()}`;

    //Agrego una tarjeta con la info del producto
    let cartBoxDiv1 = document.querySelector(".cartBoxDiv1");
    let newProduct = document.createElement("div");
    cartBoxDiv1.appendChild(newProduct);
    let contenido = document.createElement("p");
    newProduct.appendChild(contenido);
    contenido.textContent = `Nombre: ${producto.getName()}, Modelo: ${producto.getModel()}`
}