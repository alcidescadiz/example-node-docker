const express = require('express')
const app = express()
const user = require('./user/api')


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/', user);


app.listen(3000, ()=>{
  console.log('Servidor activo desde Docker')  
})