import express from 'express';
import create from '../controllers/cities/create.js';
import read from '../controllers/cities/read.js';
import readOne from '../controllers/cities/readOne.js';
import update from '../controllers/cities/update.js';
import destroy from '../controllers/cities/destroy.js';

let router = express.Router();

router.post('/', create)
router.get('/', read)
router.get('/:_id', readOne)
router.put('/:u_id', update)
router.delete('/:_id',destroy)


export default router;



