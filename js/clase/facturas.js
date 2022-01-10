/*
    Clase factura, información sobre una compra realizada por cierto user.
*/

export class factura{

    constructor(user, producto, monto, metPago, fecha){
        this.user       = user;     //objeto tipo user
        this.producto   = producto; //lista de objeto tipo producto
        this.monto      = monto;    //int
        this.metPago    = metPago;  //String 
        this.fecha      = fecha.toLocaleDateString();   //fecha tipo Date(), atributo tipo string
        this.finalizada = false;    //booleano
    }

    /*METODO RETORNO DE PROPIEDADES */
    //user
    getUser() {
        return this.user;
    }

    //producto
    getProducto() {
        return this.producto;
    }

    //monto
    getMonto(){
        return this.monto;
    }

    //metPago
    getModoPago(){
        return this.metPago;
    }

    //fecha
    getFecha(){
        return this.fecha;
    }

    //estado de finalización
    getEstado(){
        return this.finalizada;
    }


    /* METODOS DE CAMBIO DE VALORES SI this.finalizada == false */
    //cambia titular factura
    setUser(user) {
        if (!this.finalizada)       
            this.user = user;       
    }

    //agrega un nuevo producto a la lista this.producto
    agregarProducto(producto){            
        if(!this.finalizada)
            this.producto.push(producto); 
    }

    //cambia valor de this.monto por monto
    udateMonto(monto){
        if(!this.finalizada)
            this.monto = monto;
    }
    
    //cambia valor de this.metPago por metodo
    selectModoPago(metodo){
        if(!this.finalizada)
            this.metPago = metodo;
    }

    //cambia this.fecha por fecha.toLocalDateString()
    updateDate(fecha){
        if(!this.finalizada)                         
            this.fecha = fecha.toLocaleDateString();
    }
    
    /* METODOS DE IMPRESION DE INFORMACIÓN */
    //muestra la información de la factura mediante alert()
    imprimirFactura(){
        if(this.finalizada){
            alert( `Titular de la factura: ${this.user}\n
                    Lista de productos: ${this.producto.join('-')}\n
                    Monto de la compra: ${this.monto}\n
                    Metodo de pago: ${this.metPago}\n
                    Fecha de facturación: ${this.fecha}`)
        }else
            alert("La factura aún no esta finalizada")
    }

    
    /* METODOS DE COMPARACIÓN */
    //retorna true si el this.monto es mayor a factura.monto
    esMayorMonto(factura){ //factura tipo factura
        return this.monto > factura.getMonto();
    }


    /* METODO DE FINALIZACIÓN */
    //cambia el estado de this.finalizada a true
    finalizarFactura(){
        this.finalizada = true;
    }




}//class