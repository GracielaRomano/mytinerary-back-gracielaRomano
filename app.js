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
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//MIDDLEWARES (funciones)
//USE es el metodo necesesario para obligar a mi aplicacion que use la funcion cada vez que se realiza una solicitud
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// ROUTER
app.use('/api', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {  //cuando la ruta no existe genera un error
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app
