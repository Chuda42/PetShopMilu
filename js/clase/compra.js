/* 
    Clase que indica la información sobre una compra donde tiene productos y un costo total
*/
export class compra{
    constructor(producto, cant){
        this.product = producto;         //tipo producto
        this.cant = cant;                  //tipo int representa cuantos del mismo producto
        (producto != undefined)?this.monto = producto.price*cant: this.monto =0;
        (producto != undefined)?this.id =producto.id: this.id = 0;
    }

    copiarInstancia(compra){
        this.product = compra.product;
        this.cant = compra.cant;
        this.monto = compra.monto;
        this.id = compra.id;
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

    setId(id){
        this.id = id;
    }

    updateMonto(cant){
        this.monto = this.product.price*cant;
    };

}//class