/* Importaciones de modulos */
import {user} from './js/clase/user.js'
//import {factura} from './js/clase/facturas.js'
import {guardarEnRegistroUser, setRegistroUsers, getRegistroUsers, registrarNewUser, estaUserRegistrado, FHash,getUserFromStorage, deleteRegistro} from './js/Funcionalidades/registroCliente.js'

/* Main */

/* Lectura de comandos */

/* Variables */
let salir = false;    //controla el fin de la lecuta de comandos
let registroUser;
let nombre;
let pass;
let comando;
let flag;

while(!salir){

    registroUser =getRegistroUsers(); //mantiene la variable donde guardo el registro actualizada
    if (registroUser == undefined) {  //si esta indefinida la define como lista vacia
        setRegistroUsers([]);
    }
    
    comando = prompt(`
    Para interacuar tiene lo siguientes comandos con sus respectivos resultados:
	-> Registrarse: si todavia no tiene usuario se puede registrar
	-> login: si ya tiene usuario y quiere ingresar con él
    ->Invitado: ingresa como invitado salta los comandos y se ingresa a la pagina sin logueo`)

    /* Registrarse Precondición el user no esta registrado */
    if(comando == "Registrarse"){
        registrarNewUser();
        registroUser = getRegistroUsers();
    }

    /* Login, Precondición, el ususrio existe */
    else if(comando == "login"){
        flag = 0;
        
        nombre = prompt("Escriba su nombre de usuario");
        if(registroUser[FHash(nombre)] != undefined){
            nombre = getUserFromStorage(nombre);
        
            do{
                (flag > 0)? pass=prompt("Contraseña incorrecta escriba nuevamente su contraseña"): pass = prompt("Escriba su contraseña");
                flag++;
            }while(pass != nombre.getPass() && flag < 4)
            
            if(flag < 4){
                while (comando != "logout") {
                    comando = prompt(`
                    -> consultar: consulta info del usuario
                    ->  logout: se desloguea`)
                    if(comando == "consultar"){
                        alert(`El usuario se llama ${nombre.getName()}, su saldo acual en la billetera es ${nombre.getSaldo()}, y su id es ${nombre.getId()}`); 
                    }
                }//while
            }else{ //si no hacerto la contra 3 veces
                alert("Desmasiados intentos para la contraseña, intente en un rato")
            }//else
        }else
            alert("Ese usuario no esta registrado")
        
    }//login
    
    /* Invitado */
    else if(comando == "Invitado"){
        salir = true;
    }//invitado

    //comando que elimina la storage
    else if(comando == "delete"){
        localStorage.removeItem("RegistroUser");
    }
}