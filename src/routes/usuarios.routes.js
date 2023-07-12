import { Router } from "express";
import {
  crearUsuario,
  login,
  obtenerUnUsuario,
  obtenerUsuarios,
} from "../controllers/usuarios.controllers";
import validarUsuario from "../helpers/validarUsuario";

const router = Router();

router
    .route("/usuarios")
    .get(obtenerUsuarios)
    .post(crearUsuario);
router
    .get("/usuarios/:id", obtenerUnUsuario);
router
    .post("/",validarUsuario,login);

export default router;