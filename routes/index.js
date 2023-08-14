import express from 'express';
import userRouter from './users.js'
import cityRouter from './cities.js'

let router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index' });
});
//obligo al enrutador principal a usar las rutas del enrutador del recurso principal
router.use('/users',userRouter)
router.use('/cities',cityRouter)
export default router;
