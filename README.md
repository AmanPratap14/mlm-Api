# Multi-Level Marketing (MLM) API Documentation

## Task Description

Your task is to create a Multi-Level Marketing API using Node.js, following the provided specifications:

### Total Levels
- 8 (Level 0 to Level 8)

### Earning Distribution
- If a Level 8 user earns 1000 Rs, 40% of that amount (400 Rs) should be distributed among all the users above them.
- The parent of the Level 8 user (Level 7) will receive 20% (200 Rs).
- The grandparent of the Level 8 user (Level 6) will receive 10% (100 Rs).
- The great-grandparent of the Level 8 user (Level 5) will receive 5% (50 Rs).
- The remaining 5% (50 Rs) will be distributed equally among Level 4, Level 3, Level 2, Level 1, and Level 0 users (1% each, 10 Rs per level).

### Solution Specifications

- The solution includes the following endpoints:
  - `/users`: Create a new user with a name and optionally assign a parent user.
  - `/distribute`: Distribute earnings based on the specified rules.

- The code is well-structured, follows best practices, and includes appropriate error handling and validation.

## Overview

The Multi-Level Marketing (MLM) API provides endpoints for creating users, distributing earnings, and retrieving user lists. This API allows for the management of users within an MLM system, including the creation of user hierarchies and the distribution of earnings based on predefined rules.

## Base URL

The base URL for the API is `http://localhost:3000`.

## Endpoints

### 1. Create User

- **URL**: `/api/users/create-user`
- **Method**: POST
- **Description**: Creates a new user within the MLM system.
- **Request Body**:
  - `name` (string, required): The name of the user.
  - `parent` (number, optional): The ID of the parent user.
- **Response**:
  - Success (Status Code: 201):
    - Returns the details of the created user, including the user ID, name, and parent ID (if provided).
  - Error (Status Code: 400):
    - Returns an error message if the provided data is invalid or if a user with the same name already exists.

### 2. Distribute Earnings

- **URL**: `/api/distribute`
- **Method**: POST
- **Description**: Distributes earnings among users based on predefined rules.
- **Request Body**:
  - `amount` (number, required): The total amount of earnings to be distributed.
- **Response**:
  - Success (Status Code: 200):
    - Returns the breakdown of earnings distribution, including the amount distributed to each user level.
  - Error (Status Code: 400):
    - Returns an error message if the provided amount is invalid.

### 3. User List

- **URL**: `/api/users/userList`
- **Method**: GET
- **Description**: Retrieves the list of all users within the MLM system.
- **Response**:
  - Success (Status Code: 200):
    - Returns an array containing the details of all users, including their ID, name, and parent ID.

## Error Handling

- The API returns appropriate error messages and status codes for invalid requests or server errors.
- Error messages include details about the cause of the error, such as invalid input data or duplicate user registration.

## Technologies Used

- Node.js
- Express.js
- Body-parser middleware
- Nodemon for server auto-restart

## Dependencies

- express: ^4.19.2
- body-parser: ^1.20.2
- nodemon: ^3.1.0

## Getting Started

1. Clone the repository containing the API code.
2. Install dependencies using `npm install`.
3. Start the server using `npm start`.

## License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).

## Contact

For any inquiries or support, please contact [amanpratapsingh1440@gmai.com].
