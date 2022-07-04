const { response } = require('express');
const express = require('express');
const router = express.Router();

const ProductService = require('./../services/product.service')
const service = new ProductService();

router.get('/', (req, res) => {
  const products = await service.find();
  /* const products = []; */
/*   const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    })
  } */
    res.json(products);
});
router.get('/filter', (req, res) => {
  res.send('<h2>hi, im a filter <h2/>');
});
router.get('/:id',async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.findOne(id);  
     res.json({product});
      
  } catch (error) {
    next(error);    
  }

  /*   res.json({
    id,
    name: 'product 2',
    price: 2000,
  }); */
});

router.post('/', async (req, res) =>{
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);
  
  /* res.json({
    message: "created",
    data: body
  }); */
});

router.patch('/:id', async (req, res)=> {
  try {
    const {id} = req.params;
    const body = req.body;
    const product = await service.update(body);
    res.json(product);
  } catch (error) {
    next(error);
  }

  
  res.json(product/* {
    mesagge:'created',
    data: body
  } */);
});

router.delete('/:id', async(req, res)=>{
  const { id } = req.params;
  const rta = await service.delete(id);
  res.json(rta);
});

module.exports = router;
