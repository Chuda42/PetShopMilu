/* Importaciones */
import {user} from  '../clase/user.js';

/* Generales */

export const FHash = (email) =>{
    const BASE = 10000;
    let resultado = 1;
    for (let i = 0; i < email.length; i++) {
        resultado = resultado * email.charCodeAt(i) * (i+1);
    }
    resultado = resultado % BASE;
    return resultado;
}

export const setClass = (nameClass, objeto) => {
    objeto.classList = nameClass;
}

/* login */

export const initUserIn = ()=> {
    let control = localStorage.getItem("userIN");
    if (control == undefined)
        localStorage.setItem("userIN", JSON.stringify(0));
}

export const hayUserIn = () => {
    return JSON.parse(localStorage.getItem("userIN")) != 0;
}

export const getUserIn = ()=> {
    let resultado;
    if (hayUserIn()){
        let userIn = JSON.parse(localStorage.getItem("userIN"));
        resultado = new user();
        resultado.copiarInstancia(userIn);
    }else
        resultado = 0;
    return resultado;
}

export const setUserIn = (usuario) => {
    localStorage.setItem('userIN', JSON.stringify(usuario));
}

export const login = (email, pass) => {
    
    let confirm;
    //Busco en mi registro si esta el usuario
    if (estaUserRegistrado(email)){
        let usuario = getUserFromStorage(email);
        confirm = "ok";
        (usuario.pass == pass)?setUserIn(usuario):confirm = "notPass";
    }else{
        confirm = "notUser";
    }
    loginOk(confirm);
}

export const loginOk = (confirm) => {
    //Le saco el div dentro del .contenedor-login
    let divLogin = document.querySelector(".contenedor-login");
    divLogin.removeChild(document.querySelector(".contenedor-login-overlay"));

    //Creo un div para poner adentro el mensaje
    let newDiv = document.createElement("div");
    divLogin.appendChild(newDiv);
    newDiv.className = "registroOk-mensaje"

    //Creo el mensaje con un h2 y un icono 
    let h2 = document.createElement("h2");
    let icon = document.createElement("i");
    newDiv.appendChild(h2);
    newDiv.appendChild(icon);

    let h2content;
    let iconClass;
    if (confirm == "notPass"){
        h2content = "La contraseña esta equivocada";
        iconClass = "fas fa-times-circle"
        loginBack("login")
    }else if (confirm == "notUser"){
        h2content = "El usuario no esta registrado";
        iconClass = "fas fa-times-circle"
        loginBack("login")
    }else{
        h2content = "Logueado correctamente";
        iconClass = "fas fa-check-circle"
        loginBack("index")
    }
    //Relleno el mensaje
    h2.textContent = h2content;
    icon.className = iconClass;

    //Para pintar de verde o rojo el icono
    (iconClass == "fas fa-check-circle")?icon.id = "iconTick":icon.id = "iconCross"
    setClass("post-registro", document.querySelector(".contenedor-login"));
}

export const loginBack = (key) => {
    let divLogin = document.querySelector(".contenedor-login");
    let a = document.createElement("a");
    divLogin.appendChild(a);
    
    let newDiv = document.createElement("div");
    a.appendChild(newDiv);
    newDiv.className = "registroOk-boton"
    
    let h3 = document.createElement("h3");
    h3.textContent = "Volver";
    newDiv.appendChild(h3);

    (key == "login")? a.href = "login.html": a.href = "../index.html"
}


/* registro */

export const setRegistroUsers = (listaUser) =>{
    localStorage.setItem("RegistroUser", JSON.stringify(listaUser));
    console.log("Guardada la lista con la clave `RegistroUser`, en el storage ");
}

export const initRegistroUsers = () => {
    let registroUser =getRegistroUsers(); 
    if (registroUser == undefined) {  
        setRegistroUsers([]);
    }
}

export const getRegistroUsers = ()=>{
    let listaUser = localStorage.getItem("RegistroUser");
    listaUser = JSON.parse(listaUser);
    return listaUser;
}

export const guardarEnRegistroUser = (user, listaUser) =>{
    if (listaUser[user.hash()] == undefined){
        user.setId(user.hash().toString() + "-" + 0)
        listaUser[user.hash()] = [user];
    }else{
        let id = user.hash().toString() + "-" + listaUser[user.hash()].length.toString();
        user.setId(id);
        listaUser[user.hash()].push(user);
    }
}

export const estaUserRegistrado = (email) =>{
    let hash = FHash(email);
    let registro;
    registro = getRegistroUsers();

    let resultado
    //Busco en la tabla si hay otro user con el mismo email
    if (registro[hash]  != undefined){
        resultado = registro[hash].find(value => value.email == email);
    }else {
        resultado = undefined;
    }
    return resultado != undefined;
}

/* Precondición los campos no estan vacios */
export const registrarNewUser = (nombre, email, pass)=>{
    let newUser = new user(nombre, pass, email, 0);
    let id = newUser.hash();
    newUser.setId(id);

    let resultado;
    resultado = getRegistroUsers();

    let mensaje;
    let icon;
    let back;
    if(estaUserRegistrado(newUser.email)){
        mensaje = "Ya existe un usuario registrado con ese email";
        icon = "fas fa-times-circle";
        back = "register";
    }else{
        //Registro
        guardarEnRegistroUser(newUser, resultado);
        setRegistroUsers(resultado);
        mensaje = "Usuario registrado con exito";
        icon = "fas fa-check-circle";
        back = "login";
    }
    registroOk(mensaje, icon);
    registroBack(back);
    setClass("post-registro", document.querySelector(".contenedor-register"))     
}

export const registroOk = (h2content, iconClass) => {
    //Le saco el div dentro del .contenedor-register
    let divRegistro = document.querySelector(".contenedor-register");
    divRegistro.removeChild(document.querySelector(".contenedor-register-overlay"));

    //Creo un div para poner adentro el mensaje
    let newDiv = document.createElement("div");
    divRegistro.appendChild(newDiv);
    newDiv.className = "registroOk-mensaje"

    //Creo el mensaje con un h2 y un icono 
    let h2 = document.createElement("h2");
    let icon = document.createElement("i");
    newDiv.appendChild(h2);
    newDiv.appendChild(icon);

    //Relleno el mensaje
    h2.textContent = h2content;
    icon.className = iconClass;

    //Para pintar de verde o rojo el icono
    (iconClass == "fas fa-check-circle")?icon.id = "iconTick":icon.id = "iconCross"
}

export const registroBack = (key) => {
    let divRegistro = document.querySelector(".contenedor-register");
    let a = document.createElement("a");
    divRegistro.appendChild(a);
    
    let newDiv = document.createElement("div");
    a.appendChild(newDiv);
    newDiv.className = "registroOk-boton"
    
    let h3 = document.createElement("h3");
    h3.textContent = "Volver";
    newDiv.appendChild(h3);

    (key == "login")? a.href = "login.html": a.href = "register.html"
}

export const getUserFromStorage = (email) => {
    let emailHash = FHash(email);
    let resultado = new user();
    let auxiliar = getRegistroUsers();
    auxiliar = auxiliar[emailHash];
    auxiliar =  auxiliar.find(value => value.email == email);
    resultado.copiarInstancia(auxiliar);
    return resultado;
}

export const deleteRegistro = () => {
    localStorage.removeItem("RegistroUser")
}

export const logout = () => {
    localStorage.setItem(`userIN`, JSON.stringify(0));
}