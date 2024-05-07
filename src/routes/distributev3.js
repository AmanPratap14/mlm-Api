const express = require('express');
const router = express.Router();

// Constants for level distribution percentages
const LEVEL_DISTRIBUTION_PERCENTAGES = {
    lv7: 20,
    lv6: 10,
    lv5: 5,
    lv4: 1,
    lv3: 1,
    lv2: 1,
    lv1: 1,
    lv0: 1
};

// Function to calculate distribution for a specific level
function calculateDistribution(amount, percentage) {
    return (percentage / 100) * amount;
}

// Function to distribute earnings
function distributeEarnings(amount) {
    let distribution = {};

    for (const level in LEVEL_DISTRIBUTION_PERCENTAGES) {
        const percentage = LEVEL_DISTRIBUTION_PERCENTAGES[level];
        distribution[level] = calculateDistribution(amount, percentage);
    }

    return distribution;
}

router.post('/', (req, res) => {
    // Check if 'amount' is provided in the request body
    const amount = req.body.amount;
    if (!amount || typeof amount !== 'number' || amount <= 0) {
        return res.status(400).json({ error: 'Invalid amount provided' });
    }

    // Distribute earnings and send response
    const response = distributeEarnings(amount);
    res.json(response);
});

module.exports = router;
