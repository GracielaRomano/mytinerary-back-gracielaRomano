import express from 'express';
import userRouter from './users.js'
import cityRouter from './cities.js'
import itineraryRouter from './itineraries.js'
import activityRouter from './activities.js'
import authRouter from './auth.js'
import likesRouter from './likes.js';
let router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index' });
});
//obligo al enrutador principal a usar las rutas del enrutador del recurso principal
router.use('/users',userRouter)
router.use('/cities',cityRouter)
router.use('/itineraries',itineraryRouter)
router.use('/activities',activityRouter)
router.use('/auth',authRouter)
router.use('/likes',likesRouter)
export default router;
