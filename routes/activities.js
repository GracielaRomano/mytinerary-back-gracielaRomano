import express from 'express';
import create from '../controllers/activities/create.js';
import read from '../controllers/activities/read.js';
import readOne from '../controllers/activities/readOne.js';
import update from '../controllers/activities/update.js';
import destroy from '../controllers/activities/destroy.js';


let router = express.Router();

router.post('/', create)
router.get('/', read) // buscar por el id del itinerario. Devuelve todas las actividades de ese itinerario.
router.get('/:_id', readOne) // buscar por id del itinerario en particular

router.put('/:u_id', update)

router.delete('/:_id',destroy)

export default router;