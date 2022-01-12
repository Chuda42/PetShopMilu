import {user} from  '../clase/user.js';


/* dada una lista y un user, guarda el user en el lugar resutado de la función de hash de user.name */
export const guardarEnRegistroUser = (user, listaUser) =>{
    listaUser[user.hash()] = user;  
}

/* Guardo en el storage */
//clave tipo string, listaUser lista de tipo user
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
    guardarEnRegistroUser(newUser, resultado);
    setRegistroUsers(resultado);

    alert("Registrado con exito")
}

/* Devuelve true si el usuario esta registrado en el registro del storage */
export const estaUserRegistrado = (user) =>{
    let hash = user.hash();
    let registro;
    getRegistroUsers(registro);

    return registro[hash] != undefined;
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

