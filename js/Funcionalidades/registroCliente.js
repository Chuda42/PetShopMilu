/* Importaciones */
import {user} from  '../clase/user.js';


/* dada una lista y un user, guarda el user en el lugar resutado del metodo hash de user*/
export const guardarEnRegistroUser = (user, listaUser) =>{
    listaUser[user.hash()] = user;  
}

/* Guardo en el storage */
//listaUser lista de tipo user
export const setRegistroUsers = (listaUser) =>{
    localStorage.setItem("RegistroUser", JSON.stringify(listaUser));
    console.log("Guardada la lista con la clave `RegistroUser`, en el storage ");
}

/* Obtengo el registro de users */
//Devuelve lo guardado en el stroge con la clave "RegistroUser", en la varible lsitaUser
export const getRegistroUsers = ()=>{
    let listaUser = localStorage.getItem("RegistroUser");
    listaUser = JSON.parse(listaUser);
    return listaUser;
}

/* Registra un user en el registro que esta en el storage */
//Precondición: el usuario no esta registrado
export const registrarNewUser = ()=>{
    let nombre = prompt("Escriba su nombre por favor");
    let pass = prompt("Escriba su contraseña por favor");

    let newUser = new user(nombre, pass, 0);
    let id = newUser.hash();
    newUser.setId(id);

    let resultado;
    resultado = getRegistroUsers();

    if(estaUserRegistrado(newUser)){
        alert("Ya hay un usuario registrado con ese nombre");
    }else{
        //Busco un lugar en el registro, si no esta disponible el lugar del hash le sumo 1 hasta el tope que es 10001
        while (resultado[id] != undefined && id < 10001) {
            id++;
            newUser.setId(id);
        }
        //Si rompe porque el id supera el maximo esperado manda alerta si no se guarda el user.
        if(id < 10001){
            guardarEnRegistroUser(newUser, resultado);
            setRegistroUsers(resultado);
            alert("Registrado con exito")
        }else 
            alert("No se encontro lugar en el registro para el usuario");
    }
    
}

/* Devuelve true si el usuario esta registrado en el registro del storage */
export const estaUserRegistrado = (user) =>{
    let hash = user.hash();
    let registro;
    registro = getRegistroUsers();

    return registro[hash] != undefined && registro[hash].name == user.getName();
}

/* Funcion de hash dado un nombre de user te devuelve la posicion en el registro */
export const FHash = (nombre) =>{
    const BASE = 10000;
    let resultado = 1;
    for (let i = 0; i < nombre.length; i++) {
        resultado = resultado * nombre.charCodeAt(i) * (i+1);
    }
    resultado = resultado % BASE;
    return resultado;
}

/* Dado nombre, retorna el obejeto correpondiente en el registro, y lo retorna en tipo user */
//nombre tipo string, resultado tipo user
export const getUserFromStorage = (nombre) => {
    let nombreHash = FHash(nombre);
    let resultado = new user(); 
    resultado.copiarInstancia(getRegistroUsers()[nombreHash]);
    return resultado;
}

/* Elimina el registro de usuarios */
export const deleteRegistro = () => {
    localStorage.removeItem("RegistroUser")
}

