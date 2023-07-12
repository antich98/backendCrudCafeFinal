import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarUsuario = [
    check("email")
    .notEmpty()
    .withMessage("El email es requerido")
    .isEmail()
    .withMessage("Debe ser un email valido")
    .isLength({ min: 6, max: 256 })
    .withMessage(
        "El email debe tener entre 6 y 256 caracteres"
    ),
    check("password")
    .notEmpty()
    .withMessage("La contraseña es requerida")
    .isLength({ min: 8, max: 16 })
    .withMessage(
        "La contraseña debe tener entre 8 y 16 caracteres"
    ),
    (req, res, next) => {resultadoValidacion(req, res, next)}
];
export default validarUsuario;
