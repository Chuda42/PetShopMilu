export class producto{
    constructor(name, model, img, price, id){
        this.name = name;       
        this.model = model;
        this.img = img;    
        this.price = price;     
        this.id = id;         
        this.descuento = 0;     
    }

    /* Getters */
    getName(){
        return this.name;
    }

    getModel(){
        return this.model;
    }

    getPrice(){
        return this.price;
    }

    getId(){
        return this.id;
    }

    getDescuento(){
        return this.descuento;
    }


    /* Setters */
    setName(name){
        this.name = name;
    }

    setModel(model){
        this.model = model;
    }

    setPrice(price){
        this.price = price;
    }

    setId(id){
        this.id = id;
    }

    setDescuento(desc){
        this.descuento = desc;
    }

    udate(name, model, price, id ,desc){
        this.name == name;
        this.model = model;
        this.price = price;
        this.id = id;
        this.descuento = desc;
    }
    

    /* COMPARACIÓN */
    igualName(name){
        return this.name == name;
    }

    igualModel(model){
        return this.model == model;
    }

    igualPrice(price){
        return this.price == price;
    }

    igualId(id){ 
        return this.id == id;
    }

    tieneDescuento(){
        return this.descuento != 0;
    }

    igualProducto(producto){  //producto de tipo producto
        return (this.igualName(producto.getName()) && (this.igualModel(producto.getModel())) && (this.igualPrice(producto.getPrice())) && (this.igualId(producto.getId())));
    }
}//class