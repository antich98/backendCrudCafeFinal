import { Router } from "express";
import { borrarProducto, crearProducto, obtenerProductos, editarProducto } from "../controllers/productos.controllers";

const router = Router();

/* app.get('/productos', (req, res) => {
    res.send('Esto es una respuesta a una peticion get');
  }) */

router.route('/productos').get(obtenerProductos).post(crearProducto);
router.route('/productos/:id').delete(borrarProducto).put(editarProducto);

export default router;