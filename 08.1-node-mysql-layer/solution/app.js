import express from 'express';
import carRoutes from './app/routes/car.routes.js';
import dbRoutes from "./app/routes/db.routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/db', dbRoutes);
app.use('/cars', carRoutes);

const PORT = 3000;

app.listen(PORT, (err) => {
    console.log(`Server is running on port ${PORT}`);
});

