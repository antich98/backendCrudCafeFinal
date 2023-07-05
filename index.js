import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import 'dotenv/config';
import './src/database/dbConnection';
import productosRouter from "./src/routes/productos.routes";
import usuariosRouter from "./src/routes/usuarios.routes";

//tomar un puerto
//crear una instancia de express
const app = express();
//crear una variable para guardar un puerto
app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'), () => {
  console.log('Estoy en el puerto ' + app.get("port"));
});

//middlewares:
app.use(cors()); //permite conexiones remotas
app.use(express.json()); //puedo tomar del objeto request datos en formato json.
app.use(morgan('dev')); //me muestra en la consola informacion extra de las solicitudes get, put, post, etc
// console.log(path.join(__dirname, '/public'));
app.use(express.static(path.join(__dirname, '/public'))); //esto nos permite poder ejecutar los archivos estaticos de mi proyecto en la ruta raiz de mi backend ej: http://localhost:4000

//rutas
//http://localhost:4000/productos
app.use('/apiCafe', productosRouter);
app.use('/apiCafe/auth', usuariosRouter);
