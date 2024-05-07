const express = require('express');
const router = express.Router();

function calculateDistribution(amount,level,distribution){
    distribution[level] = ((level/ 100) * amount);
    return distribution;
}
function distributeEarnings(amount){
    const levelMap = {
        lv7 : 20,
        lv6 : 10,
        lv5 : 5,
        lv4 : 1,
        lv3 : 1,
        lv2 : 1,
        lv1 : 1,
        lv0 : 1
    } 
    
    let distribution = {};
    let amount = amount;

    for (const level in levelMap) {
        calculateDistribution(amount, level, distribution);
    }
    return distribution;
}


router.post('/', (req, res) => {
    const amount = req.body.amount;
    const response = distributeEarnings(amount);
    res.json(response);
  });
  
  module.exports = router;