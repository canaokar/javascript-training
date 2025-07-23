import * as carService from '../services/car.service.js';

export const getCars = async (req, res) => {
    try {
        const cars = await carService.getAllCars();
        res.json(cars);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getCarById = async (req, res) => {
    try {
        const { id } = req.params;
        const car = await carService.getCarById(id);

        if (!car) {
            return res.status(404).json({ error: 'Car not found' });
        }

        res.json(car);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createCar = async (req, res) => {
    try {
        const { car_name, color } = req.body;
        if (!car_name || !color) {
            return res.status(400).json({ error: 'Please provide both car name and color' });
        }

        const result = await carService.createCar(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateCar = async (req, res) => {
    try {
        const { id } = req.params;
        const { car_name, color } = req.body;

        if (!car_name && !color) {
            return res.status(400).json({ error: 'Please provide at least car name or color to update' });
        }

        const result = await carService.updateCar(id, req.body);

        if (!result) {
            return res.status(404).json({ error: 'Car not found' });
        }

        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteCar = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await carService.deleteCar(id);

        if (!result) {
            return res.status(404).json({ error: 'Car not found' });
        }

        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
