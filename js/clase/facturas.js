/*
    Clase factura, información sobre una compra realizada por cierto user.
*/

export class factura{

    constructor(user, compra, monto, metPago, fecha, id){
        this.user       = user;     //objeto tipo user
        this.compra     = compra; //lista de objeto tipo compra
        this.monto      = monto;    //int
        this.metPago    = metPago;  //String 
        this.fecha      = fecha.toDateString();   //fecha tipo Date(), atributo tipo string
        this.id = id;    //id de la factura el mismo que el del usuario
    }

    /*METODO RETORNO DE PROPIEDADES */
    //user
    getUser() {
        return this.user;
    }

    //producto
    getCompra() {
        return this.compra;
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

    /* METODOS DE CAMBIO DE VALORES SI this.finalizada == false */
    //cambia titular factura
    setUser(user) {      
            this.user = user;       
    }

    //agrega una nueva compra a la lista this.compra
    agregarProducto(compra){            
            this.compra.push(compra); 
    }

    //cambia valor de this.monto por monto
    udateMonto(monto){
        this.monto = monto;
    }
    
    //cambia valor de this.metPago por metodo
    selectModoPago(metodo){
        this.metPago = metodo;
    }

    //cambia this.fecha por fecha.toLocalDateString()
    updateDate(fecha){
        this.fecha = fecha.toLocaleDateString();
    }
    
    /* METODOS DE COMPARACIÓN */
    //retorna true si el this.monto es mayor a factura.monto
    esMayorMonto(factura){ //factura tipo factura
        return this.monto > factura.getMonto();
    }

}//class