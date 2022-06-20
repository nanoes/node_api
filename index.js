//console.log('MyApp');

const express = require('express');
const faker = require('faker');
const cors = require('cors');
const app = express();

const port = 3000;
app.use(cors());
app.get('/', (req, res) => {
  res.send('<h1>hi, my server in express<h1/>');
});
app.get('/new-root', (req, res) => {
  res.send('<h1>hi, im new root<h1/>');
});
app.get('/products', (req, res) => {
  const products = [];
  for (let index = 0; index < 100; index++) {
    //const element = array[index];
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
      //(faker.commerce.price(), 10),
    });
  }
  res.json(products/* [
    {
      name: 'product 1',
      price: 10,
    },
    {
      name: 'product 12',
      price: 120,
    }
  ] */);
});
app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'product 2',
    price: 2000
  });
});
app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json ({
      limit,
      offset
    });
  }else{
    res.send('dont have parameters');
  }
});
app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId , productId} = req.params;
  res.json({
    categoryId,
    productId,
  });
});



app.listen(port, () => {
  console.log(`mi port  + ${port}`);
});
