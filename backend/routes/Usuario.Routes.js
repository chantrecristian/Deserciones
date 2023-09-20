import express from "express";

const router = express.Router();

//exportaciones de funciones del usuario controllers
import { registrar ,autenticar } from "../controllers/UsuarioControllers.js";

//Autenticacion , registro y confirmacion de usuarios
router.post('/', registrar); //Cracion de usuarios
router.post('/login', autenticar);
export default router;