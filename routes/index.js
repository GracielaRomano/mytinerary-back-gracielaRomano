import express from 'express';
import userRouter from './users.js'
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/users', function(req, res, next) {
  res.render('index', { title: 'Users' });
});
//obligo al enrutador principal a usar las rutas del enrutador del recurso principal
router.use('/users',userRouter)
export default router;
