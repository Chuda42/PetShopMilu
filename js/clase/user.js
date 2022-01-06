/* 
    clase usuario, tiene la infrmación sobre un usuario.
*/

export class user{
    constructor(userName, pass, id){
        this.name      = userName; //string
        this.pass      = pass;     //string  
        this.id        = id;       //int
        this.billetera = 0;        //int, indica los fondos de la billetera cuando recien se instancia es 0      
        this.historial = [];       //Lista de facturaciónes del cliente
        this.active    = false;    //indica si el usuario esta logeado

    }


    /*ESTADO DE ACTIVIDAD*/
    /*Pasa el estado del objeto a activo*/
    userLogin() {
        this.active = true;
    }
    /*Pasa el estado del objeto a inactivo*/
    userLogout() {
        this.active = false;
    }

    /*OBTENER INFORMACIÓN DEL USER*/
    /*retorna el nombre*/
    getName() {
        return this.name;
    }

    /*retorna el id*/
    getId() {
        return this.id;
    }

    /*retorna el saldo de la billetera*/
    getSaldo(){
        return this.billetera;
    }

    /*CAMBIA INFORMACIÓN DEL USUARIO*/
    
    /*suma a la cantidad actual de la billetera monto*/
    sumarSaldo(monto){
        this.billetera = this.billetera + monto; 
    }

    /*resta a la cantidad actual de la billetara monto*/
    restarSaldo(monto){
        this.billetera = this.billetera - monto;
    }

    /*actualizar saldo de billetera en monto*/
    udateSaldo(monto){
        this.billetera = monto;
    }
    
    /*actualizar nombre de usuario*/
    udateName(name){
        this.name = name;
    }

    /*actualiza el pass del usuario*/
    udatePass(pass){
        this.pass = pass;
    }

    /*agrega un nuevo objeto factura al historial*/
    pushFactura(factura){
        this.historial.push(factura);
    }
}


