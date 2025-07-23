import express from 'express';
import * as dbController from '../controllers/db.controller.js';

const router = express.Router();

router.get('/init', dbController.initDB);
router.get('/seed-cars', dbController.seedCars);

export default router;
