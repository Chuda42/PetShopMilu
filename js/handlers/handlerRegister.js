/* IMPORTACIONES */
import{user} from '../clase/user.js'
import * as LOGIN from '../interfaces/login.js'
const {jQuery} = window.jQuery;
const $ = window.jQuery;

/* MAIN */

//vista inicial
$(".contenedor-register h5").hide();
$("#contraseña-no-coinciden").hide();
$("#contraseña-coinciden").hide();
$(".contenedor-register .mensaje-no-coinciden").hide();
$(".contenedor-register span").hide();


// ingreso de datos por input form
let registrarse = document.querySelector(".contenedor-register-boton")
registrarse.addEventListener("click", () =>{
    let nombre = document.querySelector("#input-register-name").value;
    let email = document.querySelector("#input-register-email").value;
    let pass = document.querySelector("#input-register-pass").value;
    let passConfirm = document.querySelector("#input-register-pass-confirm").value;
    
    if(nombre == "" || email == "" || pass == ""){
        $(".contenedor-register span").show();
        $(".contenedor-register .mensaje-no-coinciden").hide();
        setTimeout(() => {
            $(".contenedor-register span").hide();
        }, 2500);
        /* Reseteo los campos */
        document.querySelector("#input-register-name").value         = null;
        document.querySelector("#input-register-email").value        = null;
        document.querySelector("#input-register-pass").value         = null;
        document.querySelector("#input-register-pass-confirm").value = null;
    }else if(pass != passConfirm){
        $(".contenedor-register .mensaje-no-coinciden").show();
        setTimeout(() => {
            $(".contenedor-register .mensaje-no-coinciden").hide();
        }, 2500);
        /* Reseteo los campos de las contra */
        document.querySelector("#input-register-pass").value         = null;
        document.querySelector("#input-register-pass-confirm").value = null;
    }else{
        LOGIN.registrarNewUser(nombre, email, pass, passConfirm);
    }
    $("#contraseña-coinciden").hide();
    $("#contraseña-no-coinciden").hide();
});

// Evento que tambien perminte dar enter para registrar
document.addEventListener(`keydown`, (event) => {
    if (event.key == "Enter"){
        registrarse.click();
    }
});

//Eventeo de control si la confirmación de la contraseña esta bien
$("#input-register-pass-confirm").on("keyup", (event) => {
    if(event.target.value != document.querySelector("#input-register-pass").value){
        $("#contraseña-no-coinciden").show();
        $("#contraseña-coinciden").hide();
    }else{
        $("#contraseña-no-coinciden").hide();
        $("#contraseña-coinciden").show();
    }
})