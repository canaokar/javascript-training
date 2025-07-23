import connection from '../config/db.js';

const initializeDB = async () => {
    try {
        // First check if the database exists
        await connection.query('CREATE DATABASE IF NOT EXISTS car');

        // Use the database
        await connection.query('USE car');

        // Create the cars table
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS cars (
                id INT AUTO_INCREMENT PRIMARY KEY,
                car_name VARCHAR(255) NOT NULL,
                color VARCHAR(255) NOT NULL
            )
        `;

        await connection.query(createTableQuery);
        return { message: 'Database initialized and table created successfully' };
    } catch (error) {
        console.error('Error initializing database:', error);
        throw error;
    }
};

const seedCars = async () => {
    try {
        // First ensure the table exists
        await initializeDB();

        // Check if the table exists
        const [tables] = await connection.query('SHOW TABLES LIKE "cars"');

        if (tables.length === 0) {
            throw new Error('Cars table does not exist');
        }

        // Delete existing data instead of TRUNCATE
        await connection.query('DELETE FROM cars');

        // Sample cars data
        const cars = [
            { car_name: 'Toyota Camry', color: 'Blue' },
            { car_name: 'Honda Civic', color: 'Red' },
            { car_name: 'Tesla Model 3', color: 'White' },
            { car_name: 'Ford Mustang', color: 'Black' }
        ];

        // Insert each car
        for (const car of cars) {
            await connection.query(
                'INSERT INTO cars (car_name, color) VALUES (?, ?)',
                [car.car_name, car.color]
            );
        }

        return { message: 'Sample cars added successfully', count: cars.length };
    } catch (error) {
        console.error('Error seeding cars:', error);
        throw error;
    }
};

export { initializeDB, seedCars };

