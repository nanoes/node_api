const express = require('express');
const usersRouter = require('./users.router');
const categoriesRouter = require('./categories.router');
const productsRouter = require('./products.router');

function routerApi(app) {
  const router = express.Router();
  //manage all extensions of v1 api.
  app.use('/api/v1', router);
  router.use('/users', usersRouter);
  router.use('/categories', categoriesRouter);
  router.use('/products', productsRouter);
}
module.exports = routerApi;
