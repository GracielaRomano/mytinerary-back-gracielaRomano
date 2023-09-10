import 'dotenv/config.js'
import __dirname from './utils.js'; //importo la configuracion de la ubicacion del servidor
import createError from 'http-errors';    //sirve para crear errores
import express from 'express';            //provee metodos y propiedades para levantar servidores
import path from 'path';               // sirve para conocer la ubicacion de nuestro servidor
//var cookieParser = require('cookie-parser'); sirve para guardar cookie
import logger from 'morgan';          //para registrar cada una de las peticiones

//var indexRouter = require('./routes/index'); //solo vamos a configurar las rutas del enrutador de back principal
                                            // este enrutador va a llamar a TODOS los recursos
import indexRouter from './routes/index.js'
import notFoundHandler from './middlewares/notFoundHandler.js'
import errorHandler from './middlewares/errorHandler.js'
import cors from 'cors'


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//MIDDLEWARES (funciones)
//USE es el metodo necesesario para obligar a mi aplicacion que use la funcion cada vez que se realiza una solicitud
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// ROUTER
app.use('/api', indexRouter);

// catch 404 and forward to error handler
app.use(notFoundHandler);

// error handler
app.use(errorHandler);

export default app
