import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarProducto = [
    check("nombreProducto")
      .notEmpty()
      .withMessage("El nombre del producto es requerido")
      .isLength({ min: 2, max: 100 })
      .withMessage(
        "El nombre del producto debe tener entre 2 y 100 caracteres"
      ),
    check("precio")
      .notEmpty()
      .withMessage("El precio del producto es requerido")
      .isNumeric()
      .withMessage("El precio del producto debe ser numerico")
      .custom((value) => {
        if (value >= 1 && value <= 10000) {
          return true;
        } else {
          throw new Error(
            "El precio del producto debe estar entre $1 y $10000"
          );
        }
      }),
    check("imagen")
      .notEmpty()
      .withMessage("La direccion de la imagen es requerida")
      .matches(
        /^(https?:\/\/)?(?:www\.)?[\w-]+\.[\w.-]+(?:\/[\w-./?%&=]*)?\.(?:jpg|jpeg|png|gif|bmp|jpeg\?[\w=&.]*)$/
      )
      .withMessage("La imagen debe ser una url valida"),
    check("categoria")
      .notEmpty()
      .withMessage("La categoria es requerida")
      .isIn(["bebida caliente", "bebida fria", "dulce", "salado"])
      .withMessage("La categoria debe ser bebida caliente, bebida fria, dulce o salado"),
    (req, res, next) => {resultadoValidacion(req, res, next)}
  ];

  export default validarProducto;