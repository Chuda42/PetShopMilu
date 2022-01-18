Clase producto (producto.js):
->DESCRIPCI�N: representa la clase de los objetos de tipo producto que describen como se representa un producto en la tienda y en la web.

->ATRIBUTOS:

+name(string): representa el nombre general de una familia de productos.

+model(string): representa el nombre especifico de un producto dentro de su familia general.

+img(string): ubicación a la imagen del producto.

+price(float): representa el precio del producto.

+id(int): identificador que ayuda a guardar el producto.

+descuento(int): indica si el producto tiene un descuento, representa un procentaje.

->METODOS:

+constructor(string, string, float, int):producto ->Asigna el name, model, price, id respectivamente el descuento lo inicializa en 0.

Getters:
+getName():string ->Retorna el nombre del producto.

+getModel():string ->Retorna el modelo del producto.

+getImg():string ->retorna la dirección donde esta la imagen del producto.

+getPrice():float ->Retorna el precio del producto.

+getId():int ->Retorna el id del producto.

+getDescuento():int ->Retorna el descuento que tiene asociado el producto.

Setters:
+setName(string):void ->Setea el string como el nombre del producto es decir this.name.

+setModel(string):void ->Setea el string como el modelo del producto es decir this.model.

+setImg(string):void ->Setea el string como la dirección a la imagen del producto es decir cambia this.img

+setPrice(float):void ->Setea el float como el precio del producto es decir this.price.

+setId(int):void ->Setea int como el id del producto es decir this.id.

+setDescuento(int):void ->Setea int como el descuento del producto es decir this.descuento.

+update(stirng, string, float, int, int):void ->Actualiza todos los atributos de un producto por los que se ingresan como parametro.

Comparaci�n:
+igualName(string):bool ->Retorna true si el nombre del producto es el mismo que el string parametro.

+igualModel(string):bool ->Retorna true si el modelo del producto es el mismo que el string parametro.

+igualImg(string):bool ->Retorna true si la imagen(dirección) del producto es el mismo que el string parametro.

+igualPrice(float):bool ->Retorna ture si el precio del producto es el mismo que el float parametro.

+igualId(int):bool ->Retorna true si el id del producto es el mismo que el int parametro.

+tieneDescuento():bool ->Retorna true si el descuento del producto es distinto que 0.

+igualProducto(producto):bool ->Retorna true si this tiene todos atributos iguales a producto.