/* Importaciones de modulos */
import {user} from './js/clase/user.js'
//import {factura} from './js/clase/facturas.js'
import {guardarEnRegistroUser, setRegistroUsers, getRegistroUsers, registrarNewUser, estaUserRegistrado, FHash} from './js/Funcionalidades/registroCliente.js'

/* Main */
let registroUser = getRegistroUsers();

if (registroUser == undefined) {
    setRegistroUsers([]);
}


let estaRegistrado = prompt("Esta registrado en la pagina, si no lo esta escriba REGISTRARSE")

if (estaRegistrado == "REGISTRARSE"){
    registrarNewUser();
    registroUser = getRegistroUsers()
}else{
    let nombre = prompt("Escriba su nombre de usuario");
    let nombreHash = FHash(nombre);
    nombre = new user(); 
    nombre.copiarInstancia(registroUser[nombreHash]);
    
    alert(`El usuario se llama ${nombre.getName()}, su saldo acual en la billetera es ${nombre.getSaldo()}, y su id es ${nombre.getId()}`); 
} 

