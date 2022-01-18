Clase producto (producto.js):
->DESCRIPCI�N: representa la clase de los objetos de tipo producto que describen como se representa un producto en la tienda y en la web.

->ATRIBUTOS:

+name(string): representa el nombre general de una familia de productos.

+model(string): representa el nombre especifico de un producto dentro de su familia general.

+price(float): representa el precio del producto.

+id(int): identificador que ayuda a guardar el producto.

+descuento(int): indica si el producto tiene un descuento, representa un procentaje.

->METODOS:

+constructor(string, string, float, int):producto ->Asigna el name, model, price, id respectivamente el descuento lo inicializa en 0.

Getters:
+getName():string ->Retorna el nombre del producto.

+getModel():string ->Retorna el modelo del producto.

+getPrice():float ->Retorna el precio del producto.

+getId():int ->Retorna el id del producto.

+getDescuento():int ->Retorna el descuento que tiene asociado el producto.

Setters:
+setName(string):void ->Setea el string como el nombre del producto es decir this.name.

+setModel(string):void ->Setea el string como el modelo del producto es decir this.model.

+setPrice(float):void ->Setea el float como el precio del producto es decir this.price.

+setId(int):void ->Setea int como el id del producto es decir this.id.

+setDescuento(int):void ->Setea int como el descuento del producto es decir this.descuento.

+update(stirng, string, float, int, int):void ->Actualiza todos los atributos de un producto por los que se ingresan como parametro.

Comparaci�n:
+igualName(string):bool ->Retorna ture si el nombre del producto es el mismo que el string parametro.

+igualModel(string):bool ->Retorna ture si el modelo del producto es el mismo que el string parametro

+igualPrice(float):bool ->Retorna ture si el precio del producto es el mismo que el float parametro.

+igualId(int):bool ->Retorna ture si el id del producto es el mismo que el int parametro.

+tieneDescuento():bool ->Retorna ture si el descuento del producto es distinto que 0.

+igualProducto(producto):bool ->Retorna true si this tiene todos atributos iguales a producto.