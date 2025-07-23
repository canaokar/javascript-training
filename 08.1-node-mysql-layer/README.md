# Node.js with MySQL - Layered Architecture Example

This project demonstrates a layered architecture approach to connecting a Node.js application with a MySQL database. It implements a complete CRUD API for managing car data.

## Setup

Start MySQL using Docker:

```bash
docker run --name mysql-db -e MYSQL_ROOT_PASSWORD=myPa$$word -e MYSQL_DATABASE=car -p 3306:3306 -d mysql:latest
```

## What You'll Learn

- How to implement a layered architecture in a Node.js application
- How to connect to MySQL from Node.js using mysql2
- How to organize code into controllers, services, and routes layers
- How to implement CRUD operations with proper separation of concerns

## Architecture Overview

This project follows a layered architecture pattern with the following layers:

### 1. Routes Layer
- **Purpose**: Defines API endpoints and routes requests to appropriate controllers
- **Location**: `/solution/app/routes/`
- **Files**: `car.routes.js`, `db.routes.js`

### 2. Controllers Layer
- **Purpose**: Handles HTTP requests/responses, validates input, and calls services
- **Location**: `/solution/app/controllers/`
- **Files**: `car.controller.js`, `db.controller.js`

### 3. Services Layer
- **Purpose**: Contains business logic and communicates with the database
- **Location**: `/solution/app/services/`
- **Files**: `car.service.js`, `db.service.js`

### 4. Database Configuration
- **Purpose**: Manages database connection
- **Location**: `/solution/app/config/`
- **Files**: `db.js`

## API Endpoints

### Car Routes
- `GET /cars` - Get all cars
- `GET /cars/:id` - Get car by ID
- `POST /cars` - Create a new car
- `PUT /cars/:id` - Update a car
- `DELETE /cars/:id` - Delete a car

### Database Routes
- `GET/POST /db/init` - Initialize the database and create tables
- `GET/POST /db/seed-cars` - Add sample cars to the database

## How to Run

```bash
# Install dependencies
npm install

# Start the application
npm start

# Start with auto-reload during development
npm run dev
```

## Benefits of Layered Architecture

- **Separation of Concerns**: Each layer has a specific responsibility
- **Maintainability**: Easier to maintain and update individual components
- **Testability**: Easier to write unit tests for isolated components
- **Scalability**: Can scale different layers independently
- **Code Reusability**: Services can be reused across different controllers
