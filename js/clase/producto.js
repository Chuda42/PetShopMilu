/* 
    Clase producto, guarda información sobre los productos
*/

export class producto{
    constructor(name, model, price, id){
        this.name = name;       //string, nombre del producto
        this.model = model;     //stirng, modelo del producto
        this.price = price;     //int, precio
        this.id = id;           //int, identificador
        this.descuento = 0;     //int, porcentaje de descuento
    }

    /* METODOS RETORNO DE PROPIEDADES */
    //retorna el nombre del producto
    getName(){
        return this.name;
    }

    //retorna el modelo del producto
    getModel(){
        return this.model;
    }

    //retorna el precio del producto
    getPrice(){
        return this.price;
    }

    //retorna el id del producto
    getId(){
        return this.id;
    }

    //retorna el descuento del producto
    getDescuento(){
        return this.descuento;
    }



    /* METODOS DE CAMBIO DE PROPIEDADES */
    //cambia el nombre del producto
    udateName(name){
        this.name = name;
    }

    //cambia this.model por el valor de model
    udateModel(model){
        this.model = model;
    }

    //cambia el precio del producto this.price 
    udatePrice(price){
        this.price = price;
    }

    //cambia el valor de identificador (id) del producto por id
    udateId(id){
        this.id = id;
    }

    //cambia el valor de descuento del producto, precondición: desc es un int positivo
    udateDescuento(desc){
        this.descuento = desc;
    }

    //actualiza todas las propiedades del producto por las ingresadas como parametros
    udate(name, model, price, id ,desc){
        this.name == name;
        this.model = model;
        this.price = price;
        this.id = id;
        this.descuento = desc;
    }


    
    /* METODOS DE COMPARACIÓN (BOOLEANOS) */
    //retorna true si this.name es igual a name (string)
    igualName(name){
        return this.name == name;
    }

    //retorna true si this.model es igual a model (string)
    igualModel(model){
        return this.model == model;
    }
    //retorna ture si this.price es igual precio (int)
    igualPrice(price){
        return this.price == price;
    }

    //retorna true si this.id es igual a id (int)
    igualId(id){ 
        return this.id == id;
    }

    //retorna true si tiene this.descuento != 0, es decir tiene descuento
    tieneDescuento(){
        return this.descuento != 0;
    }

    //retorna true si todos las propiedades de los productos son las mismas
    igualProducto(producto){  //producto de tipo producto
        return (this.igualName(producto.getName()) && (this.igualModel(producto.getModel())) && (this.igualPrice(producto.getPrice())) && (this.igualId(producto.getId())));
    }
}//class