/* importaciones */
const {jQuery} = window.jQuery;
const $ = window.jQuery;


export class carritoView {
    renderCarrito(padre1, padre2){
        $(padre1).html(`
            <div class = "cabezera">
                    <div class ="cabezera-nombrePagina">
                        <a href="../index.html"><h1>MiluPetShop</h1></a>
                    </div>
            </div>
        
            <div class = "barraNav">
                <nav class ="barraNav-main">
                    <a href="../index.html"><i class = "fas fa-paw"></i> </a>
                    <ul>
                        <li><i class="fas fa-store"></i><a href="../html/tienda.html">Tienda</a></li>
                        <li><i class="fas fa-dog"></i><a id="logout-button" href="../index.html">Logout</a></li>
                    </ul>
                </nav>
            </div>

            <div class ="carrito-contenedor">
                <div class ="carrito-contenedor-noBoton">
                    <div class = "carrito-contenedor-total">
                        <ul>
                            <li id ="carrito-totalMonto">total($): <p id ="totalMonto-num">0</p></li>
                            <li><a href="#/comprar"><div class = "carrito-contenedor-total-btn" id ="carrito-comprar-btn-div"><h4 id ="carrito-comprar-btn">comprar</h4></div></a></li>
                        </ul>
                    </div>
                    <div class = "carrito-contenedor-compras"></div>
                </div>
                <div class = "carrito-contenedor-boton">
                    <a href="./tienda.html">
                        <i class = "fas fa-plus-circle" id ="plusBtn"></i>
                    </a>
                </div>
            </div>
            <footer>
                <ul>
                    <li><a href="#"><i class = "fab fa-facebook"></i>Facebook</a></li>
                    <li><a href="#"><i class="fab fa-instagram"></i> Instagram</a></li>
                    <li><a href="#"><i class="fab fa-whatsapp"></i>Whatsapp</a></li>
                </ul>
                <h5><i class= "far fa-copyright"></i>2021</h5>
            </footer>
        
        
        `)
        $(padre2).html(``);
    }

    setListaFacturaAux(padre, clase, claseUl, titulo){
        $(padre).append(`
            <div class="${clase}">
                <ul class ="${claseUl}">
                    <li><h4>${titulo}</h4></li>
                </ul>
            </div>
        `)    
    }

    setListaFactura(padre, factura, key){
        let clase;
        let claseUl;
        let titulo;
        if (key == "id") {
            clase = "factura-expandida-productos-id";
            claseUl = "factura-expandida-productos-id-ul"
            titulo = "ID";
            this.setListaFacturaAux(padre, clase, claseUl, titulo)
            factura.compra.map(e => {
                $(`.${claseUl}`).append(`<li>${e.id}</li>`)
            }) 
        }
        else if (key == "nombre"){
            clase = "factura-expandida-productos-nombre"
            claseUl = "factura-expandida-productos-nombre-ul"
            titulo = "Nombre del producto";
            this.setListaFacturaAux(padre, clase, claseUl, titulo)
            factura.compra.map(e => {
                $(`.${claseUl}`).append(`<li>${e.product.model}</li>`)
            })
        }
        else if (key == "cant"){
            clase = "factura-expandida-productos-cant"
            claseUl = "factura-expandida-productos-cant-ul"
            titulo = "cant";
            this.setListaFacturaAux(padre, clase, claseUl, titulo)
            factura.compra.map(e => {
                $(`.${claseUl}`).append(`<li>${e.cant} </li>`)
            })
        }
        else if (key == "precio"){
            clase ="factura-expandida-productos-precio";
            claseUl = "factura-expandida-productos-precio-ul"
            titulo = "precio($)"
            this.setListaFacturaAux(padre, clase, claseUl, titulo)
            factura.compra.map(e => {
                $(`.${claseUl}`).append(`<li>${e.monto} </li>`)
            })
        }
    }

    renderFacturaHeader(padre){
        $(padre).append(`
            <div class="factura-expandida-header">
                <img src="../media/img/Foto-Portada.png" alt="portada-factura">
            </div>
        `)
    }

    renderFacturaInfo(padre, factura){
       $(padre).append(`
            <div class="factura-expandida-info">
                <h4>Nombre del Titular: <span>"${factura.user.name}"</span></h4>
                <h4>Fecha de facturación: <span>"${factura.fecha}"</span></h4>
                <h4>ID de la factura: <span>"${factura.id}"</span></h4>
            </div>
        `)
    }

    renderFacturaPago(padre, factura){
        let iva = factura.monto * 1.22;
        $(padre).append(`
            <div class="factura-expandida-pago">
                <h4>Total compra (sin IVA)($): <span>${factura.monto}</span></h4>
                <h4>Metodo de pago: <span>${factura.metPago}</span></h4>
                <h3>TOTAL (con IVA)($): <span>${iva}</span></h3>
            </div>
        `)
    }

    renderFacturaBody(padre,factura){
        $(padre).append(`<div class="factura-expandida-body"></div>`);
        this.renderFacturaInfo($(".factura-expandida-body"), factura)
        $(".factura-expandida-body").append(`<h3>Productos</h3>`);
        $(".factura-expandida-body").append(`<div class="factura-expandida-productos"></div>`);
        this.setListaFactura($(".factura-expandida-productos"), factura, "id");
        this.setListaFactura($(".factura-expandida-productos"), factura, "nombre");
        this.setListaFactura($(".factura-expandida-productos"), factura, "cant");
        this.setListaFactura($(".factura-expandida-productos"), factura, "precio");
        this.renderFacturaPago($(".factura-expandida-body"), factura);

    }

    renderFactura(padre1, padre2, factura){
        $(padre1).html(`
        <div class = "cabezera">
            <div class ="cabezera-nombrePagina">
                <a href="../index.html"><h1>MiluPetShop</h1></a>
            </div>
        </div>

        <div class = "barraNav">
            <nav class ="barraNav-main">
                <a href="../index.html"><i class = "fas fa-paw"></i> </a>
                <ul>
                    <li><i class="fas fa-store"></i><a href="../html/tienda.html">Tienda</a></li>
                    <li><i class="fas fa-dog"></i><a id="logout-button" href="../index.html">Logout</a></li>
                </ul>
            </nav>
        </div>
        
        <div class="graciasPorComprar">
            <h3>Gracias por su compra!, su factura es la siguiente si quiere descargarla toque <span id="descargarFactura">aqui</span></h3>
        </div>
        
        `)
        $(padre2).html(`<div class="factura-expandida" id = "capture-${factura.id}">`)
        this.renderFacturaHeader($(`#capture-${factura.id}`))
        this.renderFacturaBody($(`#capture-${factura.id}`), factura);
        
    }

    renderFormCompra(padre1, padre2){
        $(padre1).html(`
        <div class = "cabezera">
            <div class ="cabezera-nombrePagina">
                <a href="../index.html"><h1>MiluPetShop</h1></a>
            </div>
        </div>

        <div class = "barraNav">
            <nav class ="barraNav-main">
                <a href="../index.html"><i class = "fas fa-paw"></i> </a>
                <ul>
                    <li><i class="fas fa-store"></i><a href="../html/tienda.html">Tienda</a></li>
                    <li><i class="fas fa-dog"></i><a id="logout-button" href="../index.html">Logout</a></li>
                </ul>
            </nav>
        </div>`)
        $(padre2).html(`<div class = "contenedor-register">
        <div class ="contenedor-register-overlay">
            <form>
                <ul>
                    <li>
                        <h3>Nombre del titular de la factura <span>*Campo Requerido</span></h3>
                        <h5 class="mensaje-no-coinciden">*Debe coincidir con el nombre del usurio logueado</h5>
                        <input type="text" placeholder="Nombre y apellido" class="input-register" id ="input-titularFactura-name" autocomplete="off">
                    </li>
                    <li>
                        <h3>Forma de pago <span>*Campo Requerido</span></h3>
                        <select name="Forma de pago" id="forma-pago-selector">
                            <option value="Tarjeta de credito">Tarjeta de credito</option>
                            <option value="Tarjeta de debito">Tarjeta de debito</option>
                            <option value="Transferencia">Transferencia</option>
                        </select>
                    </li>
                </ul>
            </form>
            <div class= "contenedor-register-boton" id="btnComprar">
                <a href="#/factura"> <h3>Comprar</h3></a>
            </div>    
        </div>
    </div>`)
    }
}//class