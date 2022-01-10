/* 
    Tipo carrito información sobre una compra, con la lista de productos, monto y id de identificación
*/

export class carrito{
    constructor(user, id){
        this.user = user;       //tipo user
        this.product = [];      //lista tipo producto
        this.monto = 0;         //int, representa monto total de la compra
        this.id = id;           //int que identifica a la compra
    }

    /* METODOS DE RETORNO DE PROPIEDADES*/
    //retorna el user titular del carrito
    getUser(){
        return this.user;
    }

    //retorna la lista de productos this.product
    getProduct(){
        return this.product;
    }

    //retorna el monto de la compra this.monto
    getMonto(){
        return this.monto;
    }

    //retorna el id de la compra this.id
    getId(){
        return this.id;
    }


    /* METODOS DE ACUTALIZACIÓN DE PROPIEDADES */
    //agregar producto, agrega un elemento tipo producto a this.product, y suma el monto al total
    agregarProducto(producto){
        this.product.push(producto);
        this.monto += producto.getPrice();
    }
    
}//class