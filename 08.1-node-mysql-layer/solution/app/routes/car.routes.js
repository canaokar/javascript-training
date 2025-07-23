import express from 'express';
import * as carController from '../controllers/car.controller.js';

const router = express.Router();

router.get('/', carController.getCars);
router.get('/:id', carController.getCarById);
router.post('/', carController.createCar);
router.put('/:id', carController.updateCar);
router.delete('/:id', carController.deleteCar);
export default router;
