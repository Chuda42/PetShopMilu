/* 
    Tipo carrito información sobre una compra, con la lista de productos, monto y id de identificación
*/

export class carrito{
    constructor(user){
        this.user = user;       //tipo user
        this.compra = [];      //lista tipo compra
        this.monto = 0;         //int, representa monto total de la compra
        if(user != undefined){
            this.id = user.id;
        }else
            this.id = 0;

    }

    /* Copiar instancia toma un objeto con las mismas propiedades que carrito y crea un objeto de tipo carrito*/
    copiarInstancia(carrito){
        this.user    = carrito.user;      
        this.compra = carrito.compra;      
        this.monto   = carrito.monto;         
        this.id      = carrito.id; 
    }

    /* METODOS DE RETORNO DE PROPIEDADES*/
    //retorna el user titular del carrito
    getUser(){
        return this.user;
    }

    //retorna la lista de productos this.product
    getCompra(){
        return this.compra;
    }

    //retorna el monto de la compra this.monto
    getMonto(){
        return this.monto;
    }

    //retorna el id de la compra this.id
    getId(){
        return this.id;
    }

    setUser(user){
        this.user = user;
    }

    setCompra(compra){
        this.compra = compra;
    }


    /* METODOS DE ACUTALIZACIÓN DE PROPIEDADES */
    //agregar producto, agrega un elemento tipo producto a this.product, y suma el monto al total
    agregarCompra(compra){
        this.compra.push(compra);
        this.monto += compra.monto;
    }

    updateMonto(monto){
        this.monto = this.monto + monto;
    }
    
}//class