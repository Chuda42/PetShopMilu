/* IMPORTACIONES */
import * as LOGIN from '../interfaces/login.js'


/* MAIN */

// ingreso de entradas y login mediante input de un form
let loginV = document.querySelector(".contenedor-login-boton");
loginV.addEventListener("click", () => {
    let email = document.querySelector("#input-login-email").value;
    let pass = document.querySelector("#input-login-pass").value;
    LOGIN.login(email, pass);
});

document.addEventListener('keydown', (event) => {
    if (event.key == "Enter"){
        loginV.click();
    }
});
