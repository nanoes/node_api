const express = require('express');
const { route } = require('./productsRouter');
const router = express.Router();


router.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});

module.exports = router;
