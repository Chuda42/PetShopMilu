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
}//class