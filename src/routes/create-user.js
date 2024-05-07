// const express = require('express');
// const router = express.Router();

// let users = [];

// // POST /users
// router.post('/', (req, res) => {
//   const { name, parent } = req.body;
//   const newUser = {
//     id: users.length + 1,
//     name,
//     parent
//   };
//   users.push(newUser);
//   res.status(201).json(newUser);
// });

// module.exports = router;// create-user.js// create-user.js
// create-user.js

const express = require('express');
const router = express.Router();
 
let users = [];

// Validate user input data
function validateUserData(name, parent) {
    if (!name || typeof name !== 'string' || name.trim() === '') {
        throw new Error('Invalid user name');
    }
    if (parent !== undefined && (typeof parent !== 'number' || parent <= 0)) {
        throw new Error('Invalid parent ID');
    }
}

// Check for duplicate user registration
function isDuplicateUser(name) {
    return users.some(user => user.name === name);
}

// POST /create-user
router.post('/', (req, res) => {
    const { name, parent } = req.body;

    try {
        // Validate user input data
        validateUserData(name, parent);

        // Check for duplicate user registration
        if (isDuplicateUser(name)) {
            return res.status(400).json({ error: 'User already exists' });
        }

        const newUser = {
            id: users.length + 1,
            name: name.trim(), // Trim whitespace from the name
            parent: parent
        };

        users.push(newUser);
        res.status(201).json(newUser);
        console.log('Updated users array:', users); // Add this line

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// GET /userList
router.get('/', (req, res) => {
    res.json(users);
});


module.exports = router;
