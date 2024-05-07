const express = require('express');
const router = express.Router();

// Constants for level distribution percentages
const LEVEL_DISTRIBUTION_PERCENTAGES = {
    lv8: 40,
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
    let remainingAmount = amount;

    for (const level in LEVEL_DISTRIBUTION_PERCENTAGES) {
        const percentage = LEVEL_DISTRIBUTION_PERCENTAGES[level];
        const share = calculateDistribution(amount, percentage);
        distribution[level] = share;
        remainingAmount -= share;
    }

    // Distribute remaining amount equally among levels 4 to 0
    const remainingShare = remainingAmount / 5;
    for (let i = 4; i >= 0; i--) {
        const level = 'lv' + i;
        distribution[level] = remainingShare;
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
    const distribution = distributeEarnings(amount);
    const result = {
        description: "Earnings distribution",
        amount: amount,
        breakdown: []
    };

    // Generate breakdown for each level
    for (const level in distribution) {
        result.breakdown.push({
            level: level,
            percentage: LEVEL_DISTRIBUTION_PERCENTAGES[level],
            amount: distribution[level]
        });
    }

    res.json(result);
});

module.exports = router;
