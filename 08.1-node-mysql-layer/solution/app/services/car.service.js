import connection from '../config/db.js';

const getAllCars = async () => {
    const [rows] = await connection.query('SELECT * FROM cars');
    return rows;
};

const getCarById = async (id) => {
    const [rows] = await connection.query('SELECT * FROM cars WHERE id = ?', [id]);
    return rows[0];
};

const createCar = async (carData) => {
    const { car_name, color } = carData;
    const [result] = await connection.query(
        'INSERT INTO cars (car_name, color) VALUES (?, ?)',
        [car_name, color]
    );
    return { message: 'Car added successfully', id: result.insertId };
};

const updateCar = async (id, carData) => {
    const { car_name, color } = carData;

    // Get the current car data
    const car = await getCarById(id);
    if (!car) return null;

    // Use existing values if new ones aren't provided
    const updatedName = car_name !== undefined ? car_name : car.car_name;
    const updatedColor = color !== undefined ? color : car.color;

    const [result] = await connection.query(
        'UPDATE cars SET car_name = ?, color = ? WHERE id = ?',
        [updatedName, updatedColor, id]
    );

    if (result.affectedRows === 0) return null;

    return { message: 'Car updated successfully', id: parseInt(id) };
};

const deleteCar = async (id) => {
    const [result] = await connection.query('DELETE FROM cars WHERE id = ?', [id]);

    if (result.affectedRows === 0) return null;

    return { message: 'Car deleted successfully', id: parseInt(id) };
};

export { getAllCars, getCarById, createCar, updateCar, deleteCar };
