/* Importaciones de modulos */
import {user} from './js/clase/user.js'
//import {factura} from './js/clase/facturas.js'
import { registroUser } from './js/Funcionalidades/registroCliente.js'

let usuario1 = new user("manu", 123, 155);
registroUser(usuario1);