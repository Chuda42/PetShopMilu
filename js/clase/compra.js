/* 
    Clase que indica la información sobre una compra donde tiene productos y un costo total
*/

export class compra{
    constructor(user){
        this.user = user;     //tipo user
        this.productos = [];        //tipo lista de productos
        this.monto = 0;             //int, monto de la compra
    }

    /* METODOS RETORNO DE PROPIEDADES  */
    //retorna user 
    getUser() {
        return this.user;
    }

    //retorna this.productos lista de productos
    getProductos(){
        return this.productos;
    }

    //retorna this.monto, monto total de la compra
    getMonto(){
        return this.monto;
    }

}//class