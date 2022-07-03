const express = require('express');
const usersRouter = require('./usersRouter');
const categoriesRouter = require('./categoriesRouter');
const productsRouter = require('./productsRouter');

function routerApi(app) {
  const router = express.Router();
  //manage all extensions of v1 api.
  app.use('/api/v1', router);
  router.use('/users', usersRouter);
  router.use('/categories', categoriesRouter);
  router.use('/products', productsRouter);
}
module.exports = routerApi;
