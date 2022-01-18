import {user} from './js/clase/user.js'
//import {factura} from './js/clase/facturas.js'
import * as LOGIN from './js/Funcionalidades/login.js'

/* Main */

//Inicializaciones
LOGIN.initRegistroUsers();
LOGIN.initUserIn();

/* Registrarse con los input */
let registrarse = document.querySelector(".contenedor-register-boton")
if (registrarse != undefined)
    registrarse.addEventListener("click", LOGIN.registrarNewUser);

let loginV = document.querySelector(".contenedor-login-boton")
if(loginV != undefined){
    loginV.addEventListener("click", LOGIN.login);
}

let usuario2= new user();
console.log(usuario2);

