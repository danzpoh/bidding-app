const express = require('express');
const router = express.Router();

function randomPrices(base, count, isBid) {
  let prices = [];
  for (let i = 0; i < count; i++) {
    let price = base + Math.floor(Math.random() * 10);
    prices.push(price);
  }
  return isBid
    ? prices.sort((a, b) => b - a)
    : prices.sort((a, b) => a - b);
}

router.get('/', (req, res) => {
  res.json({
    item: 'Limited Coin',
    total_quantity: 100,
    asks: randomPrices(100, 3, false),
    bids: randomPrices(95, 3, true)
  });
});

module.exports = router;
