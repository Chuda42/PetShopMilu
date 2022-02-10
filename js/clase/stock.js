import {compra} from '../clase/compra.js'
import * as LOGIN from '../interfaces/login.js'
import * as CART from  '../interfaces/cart.js' 



export class stock{
    agregarTarjeta(padre, producto){
        let html = 
            `<div class="producto-card">
                <div class="producto-card-img">
                    <img src="${producto.img}" alt="Producto-${producto.id}">
                </div>
                <div class="producto-card-info">
                    <ul>
                        <li><h4>Nombre:</h4>${producto.name}</li>
                        <li><h4>Modelo:</h4> ${producto.model}</li>
                        <li><h4>Descripcion:</h4>${producto.descripcion}</li>
                        <li><h4>Price: </h4>${producto.price}</li>
                        <li><h4>Descuento: </h4>${producto.descuento}</li>
                    </ul>
                </div>
                <div class="producto-card-botonAgregarCarrito">
                    <button id ="AgregarProducto-store-${producto.id}">Agregar al Carrito</button>
                </div>
            </div>`
            
        $(padre).append(html);
        $(`#AgregarProducto-store-${producto.id}`).on('click', ()=>{
            if(LOGIN.hayUserIn()){
                let compra1 = new compra(producto, 1);
                CART.setCompraCarritoSTORAGE(compra1);
                document.getElementById("pag-carrito-entrar").click()
            }else{
                document.querySelector("#login-entrar").click();
            }
        });
    }

    agregarTarjetasHTML(padre, FuncionEvento){
        $.getJSON(`../../json/stock.json`, (response) => {
            
            response.stock.map(element =>{
                this.agregarTarjeta(padre, element, FuncionEvento)
            })
        })
    }
}//class