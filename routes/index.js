const usersRouter = require('./usersRouter');
const categoriesRouter = require('./categoriesRouter');
const productsRouter = require('./productsRouter');

function routerApi(app) {
  app.use('/users', usersRouter);
  app.use('/categories', categoriesRouter);
  app.use('/products', productsRouter);
}


module.exports = routerApi;
