import { Router } from "express";
import { crearUsuario, login, obtenerUnUsuario, obtenerUsuarios } from "../controllers/usuarios.controllers";

const router = Router()

router.get("/usuarios",obtenerUsuarios).post(crearUsuario)
router.get("/usuarios/:id",obtenerUnUsuario)
router.post("/",login)
export default router