/* 
    clase usuario, tiene la infrmación sobre un usuario.
*/

export class user{
    constructor(userName, pass, email, id){
        this.name      = userName;  //string
        this.pass      = pass;      //string
        this.email     = email;     //string
        this.id        = id;        //int - int
        this.billetera = 0;         //int, saldo de la billetera   
        this.historial = [];        //Carrito, guarda el ultimo carrito
        this.active    = false;     //indica si el usuario esta logeado (booleano)

    }

    /* Dado un objeto con las mismas propiedades que un user pero que no es un user contruye uno */
    copiarInstancia(user){
        this.name      = user.name;
        this.pass      = user.pass;
        this.email     = user.email;
        this.id        = user.id;
        this.billetera =  user.billetera;
        this.historial = user.historial;
        this.active    = user.active;
    }


    /*ESTADO DE ACTIVIDAD*/
    //cambia this.active a true
    userLogin() {
        this.active = true;
    }

    //cambia this.active a false
    userLogout() {
        this.active = false;
    }



    /*OBTENER INFORMACIÓN DEL USER*/
    //retorna this.name (username)
    getName() {
        return this.name;
    }

    //retorna this.pass
    getPass() {
        return this.pass;
    }

    //retonra this.email
    getEmail(){
        return this.email;
    }

    //retorna el id del cliente
    getId() {
        return this.id;
    }

    //retorna el saldo de la billetera, this.billetera
    getSaldo(){
        return this.billetera;
    }

    //retorna el this.historial, historial del user
    getHistorial(){
        return this.historial;
    }



    /*CAMBIA INFORMACIÓN DEL USUARIO*/
    //cambia this.nome por el valor de name
    udateName(name){
        this.name = name;
    }

    //cambia this.pass por el valor de pass
    udatePass(pass){
        this.pass = pass;
    }

    //cambia this.email
    setEmail(email){
        this.email = email;        
    }

    //cambia this.id por id
    setId(id){
        this.id = id;
    }

    //a this.billetera (saldo) le suma monto 
    sumarSaldo(monto){
        this.billetera = this.billetera + monto; 
    }

    //a this.billetera le resta monto si el resultado, es negativo manda alert de saldo insuficiente
    restarSaldo(monto){
        let res = this.billetera - monto;
        (res < 0)? alert(`Saldo disponible ${this.billetera}`) : this.billetera = res;
    }

    //cambia el this.monto por el valor de monto
    udateSaldo(monto){
        this.billetera = monto;
    }
    
    //agrega un nuevo objeto carrito a this.historial
    saveCarrito(carrito){
        this.historial = carrito;
    }

    /* Funcion hash */
    // Funcion de hash para un string nombre 
    hash(){
        const BASE = 10000;
        let resultado = 1;
        for (let i = 0; i < this.email.length; i++) {
            resultado = resultado * this.email.charCodeAt(i) * (i+1);
        }
        resultado = resultado % BASE;
        return resultado;
    }

}//class


