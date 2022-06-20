 //console.log('MyApp');

const express = require ('express');

const app = express();
const port = 3000;

app.get('/', (req, res)=> {
  res.send('hi, my server in express');
});

app.listen(port, ()=>{
  console.log('mi port ' + port);
});




//create app
