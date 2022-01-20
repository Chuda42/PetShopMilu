export class producto{
    constructor(name, model, img, price, id){
        this.name = name;       
        this.model = model;
        this.img = img;    
        this.price = price;     
        this.id = id;         
        this.descuento = 0;     
    }

    //Copia la instancia de un objeto con las mismas propiedades que producto pero devuelve un objeto con el tipo poroducto
    copiarInstancia(product){
        this.name = product.name;       
        this.model = product.model;     
        this.price = product.price;     
        this.id = product.id;           
        this.descuento = product.descuento;     
    }

    /* Getters */
    getName(){
        return this.name;
    }

    getModel(){
        return this.model;
    }

    getImg(){
        return this.img;
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

    setImg(img){
        this.img = img;
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

    udate(name, model, img, price, id ,desc){
        this.name == name;
        this.model = model;
        this.img = img;
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

    igualImg(img){
        return this.img == img;
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
        return (this.igualName(producto.getName()) && (this.igualModel(producto.getModel()))&& (this.igualImg(producto.getImg())) && (this.igualPrice(producto.getPrice())) && (this.igualId(producto.getId())));
    }
}//class