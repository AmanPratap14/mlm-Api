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

// Check if a parent is already assigned to the user
function isParentAssigned(parent) {
    return users.some(user => user.id === parent);
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

        // Check if a parent is already assigned
        if (parent !== undefined && isParentAssigned(parent)) {
            return res.status(400).json({ error: 'User already has a parent' });
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