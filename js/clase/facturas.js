/*
    Clase factura, información sobre una compra realizada por cierto user.
*/

class factura{

    constructor(user, producto, monto, metPago, fecha){
        this.user       = user;     //objeto tipo user
        this.producto   = producto; //lista de objeto tipo producto
        this.monto      = monto;    //int
        this.metPago    = metPago;  //String 
        this.fecha      = fecha.toLocaleDateString();   //fecha es de tipo Date(); el metodo utilizado devuelve la fecha actual como string
        this.finalizada = false;    //booleano que indica si la factura se puede acutalizar, false si, true no;
    }

    /*Retorna el usuario registrado en la factura*/
    getUser() {
        return this.user;
    }

    /*Cambia el usuario registrado en la factura*/
    setUser(user) {
        this.user = user; //objeto tipo user
    }

    /*Retorna la lista de productos*/
    getProducto() {
        return this.producto; //lista de objeto tipo producto
    }

    /*Agrega a la lista de productos un nuevo objeto tipo producto*/
    agregarProducto(producto){
        this.producto.push(producto); //agrega a la lista de productos un nuevo objeto tipo producto
    }

    /*Actualizar fecha*/
    updateDate(fecha){
        this.fecha = fecha.toLocaleDateString();
    }
    
    /*Imprime la información factura por consola*/
    imprimirFactura(){

    }

    /*cambia el estado de this.finalizada a true*/
    finalizarFactura(){
        this.finalizada = true;
    }




}