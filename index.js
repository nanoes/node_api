//console.log('MyApp');

const express = require('express');
const routerApi = require('./routes');
/* Is Faker js gone?
The Faker project was maintained by Marak Squires, an early-days impactful Node enthusiast and professional who went rogue and acted maliciously on January 4th, 2022. The package was deleted, and the project was abandoned.14 ene 2022 */
// si saben como me quedo obsoleto para que me intentan implementar :s :P xD -.-" ... bye
//const faker = require('@faker-js/faker');
const cors = require('cors');

const{logErrors, errorHandler, boomErrorHandler} = require('./middlewares/error.handler')

const app = express();
//const faker = require('faker');
const port = 3000;
const whitelist =['http://localhost:8081','https://myapp.com' ];
const options = {
  origin: (origin, callback)=>{
    if (whitelist.includes(origin)) {
      callback(null, true);
    }else{
      callback(new newError('forbidden'))
    }
  }
}
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
  res.send('<h1>hi, my server in express<h1/>');
});
app.get('/new-root', (req, res) => {
  res.send('<h1>hi, im new root<h1/>');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`mi port  + ${port}`);
});
