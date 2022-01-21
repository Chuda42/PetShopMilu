/* IMPORTACIONES */
import{user} from '../clase/user.js'
import * as LOGIN from '../interfaces/login.js'


/* Registrarse con los input */
let registrarse = document.querySelector(".contenedor-register-boton")
registrarse.addEventListener("click", () =>{
    let nombre = document.querySelector("#input-register-name").value;
    let email = document.querySelector("#input-register-email").value;
    let pass = document.querySelector("#input-register-pass").value;
    let passConfirm = document.querySelector("#input-register-pass-confirm").value;
    
    if(nombre == "" || email == "" || pass == ""){
        alert("No se pudo registrar al usuario porque dejo campos vacios");
        /* Reseteo los campos */
        document.querySelector("#input-register-name").value         = null;
        document.querySelector("#input-register-email").value        = null;
        document.querySelector("#input-register-pass").value         = null;
        document.querySelector("#input-register-pass-confirm").value = null;
    }else if(pass != passConfirm){
        alert("Las contraseñas no coinciden");
        /* Reseteo los campos de las contra */
        document.querySelector("#input-register-pass").value         = null;
        document.querySelector("#input-register-pass-confirm").value = null;
    }else{
        LOGIN.registrarNewUser(nombre, email, pass, passConfirm);
    }

});
document.addEventListener(`keydown`, (event) => {
    if (event.key == "Enter"){
        registrarse.click();
    }
});