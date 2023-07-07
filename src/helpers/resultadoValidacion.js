import { validationResult } from "express-validator";

const resultadoValidacion = (req, res, next) => {
  const errors = validationResult(req);
  //errors.isEmpty(); true si esta vacio, false si hay almenos un error
  //quiero preguntar si hay errores
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errores: errors.array(),
    });
  };
  next();
};

export default resultadoValidacion;