/* 
    Clase que indica la información sobre una compra donde tiene productos y un costo total
*/
export class compra{
    constructor(producto){
        this.product = product;         //tipo producto
        this.cant = 1;                  //tipo int representa cuantos del mismo producto
        this.monto = producto.precio;   //int, monto de la compra
    }

    copiarInstancia(compra){
        this.product = compra.product;
        this.cant = compra.cant;
        this.monto = compra.monto;
    }

    /* METODOS RETORNO DE PROPIEDADES  */
    //retorna user 
    getProduct() {
        return this.product;
    }

    //retorna this.productos lista de productos
    getCant(){
        return this.cant;
    }

    //retorna this.monto, monto total de la compra
    getMonto(){
        return this.monto;
    }

}//class