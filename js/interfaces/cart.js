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

/* Acomoda el contenido del carrito en el html de carrito.html
key1:indica donde se guardan las compras
key2:Donde se actualiza el precio  */
export const initCarritoHTML = (key1, key2) => {
    let cart = getCarrito();
    cart.compra.forEach(element => {
        setCompraCarritoHTML(key1, element);  
    })
    udatePrecioHTML(key2, cart.monto);
}

/* la key es el div donde crea el html de la compra */
export const setCompraCarritoHTML = (key, compra) =>{
    let divCompra = document.createElement('div');
    divCompra.className = "compra";
    divCompra.id = `compra${compra.id}`
    
    /* nombre-modelo */
    let divNombreModelo = document.createElement('div');
    divNombreModelo.className = "nombre-modelo";
    /* img */
    let imgNM = document.createElement('img');
    imgNM.src = "#";
    imgNM.alt = `foto-producto${compra.product.id}`
    divNombreModelo.appendChild(imgNM);
    /* ul */
    let ulNM = document.createElement('ul');
    let liN = document.createElement('li');
    let liNh4= document.createElement('h4');
    liNh4.textContent = `Nombre: ${compra.product.name}`
    liN.appendChild(liNh4);
    let liM = document.createElement('li');
    let liMh4= document.createElement('h4');
    liMh4.textContent = `Modelo: ${compra.product.model}`
    liM.appendChild(liMh4);
    ulNM.appendChild(liN);
    ulNM.appendChild(liM);
    divNombreModelo.appendChild(ulNM);

    /* cant */
    let divCant = document.createElement('div');
    divCant.className = 'cant';
    /* h4 */
    let divCantH4 = document.createElement('h4');
    divCantH4.textContent = `Cant: ${compra.cant}`;
    divCant.appendChild(divCantH4);
    /* flechitas */
    let i1 = document.createElement('i');
    i1.className = "fas fa-arrow-circle-left";
    let i2 = document.createElement('i');
    i2.className = "fas fa-arrow-circle-right"
    divCant.appendChild(i1);
    divCant.appendChild(i2);

    /* Precio */
    let divPrecio = document.createElement('div');
    divPrecio.className = 'precio';
    /* h4 */
    let divPrecioH4 = document.createElement('h4');
    divPrecioH4.textContent = `Precio: ${compra.monto}`
    divPrecio.appendChild(divPrecioH4);

    divCompra.appendChild(divNombreModelo);
    divCompra.appendChild(divCant);
    divCompra.appendChild(divPrecio);
    key.appendChild(divCompra);
}

export const udatePrecioHTML =(key, precio) => {
    let newPrecio = parseInt(key.textContent);
    newPrecio += parseInt(precio);
    key.textContent = newPrecio;
}

/* agarra un producto crea el objeto compra y lo setea en el carrito, tanto Storage como html */
export const setCompraCarrito = (producto) =>{
    let compra1= new compra(producto);
    setCompraCarritoSTORAGE(compra1);
}