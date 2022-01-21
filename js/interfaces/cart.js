/* importaciones */
import {user} from '../clase/user.js';
import {carrito} from '../clase/carrito.js';
import {producto} from '../clase/producto.js';
import {compra} from '../clase/compra.js';
import * as LOGIN from './login.js';


/* Funciones */

/* Crea un carrito y lo guarda en una variable en el storage con la key "carrito" */
export const initCarritoSTORAGE = () =>{
    if(!localStorage.getItem("carrito")){
        let user = LOGIN.getUserIn();
        //Instancio el carrito con el user logueado, lo guardo en el storage
        let cart = new carrito(user);
        localStorage.setItem('carrito', JSON.stringify(cart));
    }
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
nodo1:indica donde se guardan las compras
nodo2:Donde se actualiza el precio  */
export const initCarritoHTML = (nodo1, nodo2) => {
    let cart = getCarrito();
    cart.compra.forEach(element => {
        setCompraCarritoHTML(nodo1, element);  
    })
    udatePrecioHTML(nodo2, cart.monto);
}

/* la nodo es el div donde crea el html de la compra */
export const setCompraCarritoHTML = (nodo, compra) =>{
    let divCompra = document.createElement('div');
    divCompra.className = "compra";
    divCompra.id = `com${compra.id}`
    let id = compra.id;
    
    /* nombre-modelo */
    let divNombreModelo = document.createElement('div');
    divNombreModelo.className = "nombre-modelo";
    /* img */
    let imgNM = document.createElement('img');
    imgNM.src = `${compra.product.img}`;
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
    divCantH4.textContent = `Cant: `;
    let divCantH4span = document.createElement('span');
    divCantH4span.textContent =  `${compra.cant}`;
    divCantH4.appendChild(divCantH4span);
    divCantH4span.id = `can${compra.id}`
    divCant.appendChild(divCantH4);
    /* flechitas */
    let i1 = document.createElement('i');
    i1.className = "fas fa-arrow-circle-left";
    i1.id = `izq${compra.id}`;
    let i2 = document.createElement('i');
    i2.className = "fas fa-arrow-circle-right"
    i2.id = `der${compra.id}`


    divCant.appendChild(i1);
    divCant.appendChild(i2);

    /* Precio */
    let divPrecio = document.createElement('div');
    divPrecio.className = 'precio';
    /* h4 */
    let divPrecioH4 = document.createElement('h4');
    divPrecioH4.textContent = `Precio: `
    let divPrecioH4span = document.createElement('span');
    divPrecioH4span.textContent =  `${compra.monto}`;
    divPrecioH4.appendChild(divPrecioH4span);
    divPrecioH4span.id = `pre${compra.id}`
    divPrecio.appendChild(divPrecioH4);

    divCompra.appendChild(divNombreModelo);
    divCompra.appendChild(divCant);
    divCompra.appendChild(divPrecio);
    nodo.appendChild(divCompra);

        /* Sumo el evento que hace que las felchitas funcionen
    Importante hacerlo cuando se crea la etiqueta para que haga efecto
    con cada una nueva creada */
    document.querySelector(`#izq${id}`).addEventListener('click', (event) =>{
        let idizq = getIdCompra(event.target.id);
        let carrito = getCarrito();
        carrito.compra.map(element => {
            if (element.id == idizq){
                element.cant = element.cant - 1;
                element.updateMonto(element.cant)
                carrito.updateMonto(-1*element.product.price);
                localStorage.setItem("carrito", JSON.stringify(carrito));
                actualizarHtml(id, "izq");
            }
        
        
        
        })
    })
    document.querySelector(`#der${id}`).addEventListener('click', (event) =>{
        let idder = getIdCompra(event.target.id);
        let carrito = getCarrito();
        carrito.compra.map(element => {
            if (element.id == idder){
                element.cant = element.cant + 1;
                element.updateMonto(element.cant);
                carrito.updateMonto(element.product.price);
                localStorage.setItem("carrito", JSON.stringify(carrito))
                actualizarHtml(id, "der");
            }
        })
    })
}

export const udatePrecioHTML =(nodo, precio) => {
    let newPrecio = parseInt(nodo.textContent);
    newPrecio += parseInt(precio);
    nodo.textContent = newPrecio;
}

/* agarra un producto crea el objeto compra y lo setea en el carrito, tanto Storage como html */
export const setCompraCarrito = (producto) =>{
    let compra1= new compra(producto);
    setCompraCarritoSTORAGE(compra1);
}

/* funcion que suma o resta productos con las flechitas */
//key indica si es la flechita derecha o la izquierda
export const cantFlchitas = (key) => {
    if (key == "derecha"){

    }
}

 /* dado el id de las etiquetas saca el id de la compra */
export const getIdCompra = (id) =>{
    let resultado = parseInt(id[id.length - 1]);
    return resultado;
}

/* actualiza el html de las flechas si la key es izquierda resta 1 si es derecha suma 1 */
export const actualizarHtml = (id, key) =>{
    let cant = document.querySelector(`#can${id}`).textContent;
    let pre = document.querySelector(`#pre${id}`).textContent;
    let newCant = parseInt(cant);
    let newPre = parseInt(pre)/newCant;
    let total = document.querySelector("#totalMonto-num").textContent;
    total = parseInt(total);
    if(key == "izq"){
        newCant = newCant-1;
        total = total - newPre;
        newPre = newPre * newCant;
        document.querySelector(`#can${id}`).textContent = `${newCant}`;
        document.querySelector(`#pre${id}`).textContent = `${newPre}`;
    }else{
        newCant = newCant+1;
        total = total + newPre;
        newPre = newPre * newCant;
        document.querySelector(`#can${id}`).textContent = `${newCant}`;
        document.querySelector(`#pre${id}`).textContent = `${newPre}`;
    } 
    document.querySelector("#totalMonto-num").textContent = total;
}