const productsRouter = require('./productsRouter');
const usersRouter = require('./usersRouter');
function routerApi(app) {
  app.use('/products', productsRouter);
  app.use('/users', usersRouter);
  app.use('/categories', usersRouter);
}


module.exports = routerApi;
