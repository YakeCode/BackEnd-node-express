// corriendo primer servidor

const express = require ('express')
const { faker } = require('@faker-js/faker');

const app = express(); // Crear APP

const port = 3000; // puerto en el cual va a correr la app

app.get('/'/*ruta */, (request, response)=>{/*Callback */
  response.send('hola enviado desde el server en express')
})

/*  RUTAS ESPECIFICAS */

// Products
const rutaProducts= '/products';

const CallbackProducts = (request, response)=>{
  const products =[]
  const {size} = request.query;
  const limit = size || 100
  for (let index = 0; index < limit; index++){
    products.push({
      name :faker.commerce.productName(),
      price : parseInt(faker.commerce.price(),10),
      image : faker.image.url()
    })
  }
  response.json(products)
}
app.get(rutaProducts, CallbackProducts)

//Filter
const productFilter = '/products/filter'

const CallbackFilter = (request, response) => {
  response.send('soy filter')
}

app.get(productFilter,CallbackFilter)

// RUTAS DINÁMICAS

// Recibiendo Parámetros

const productId = '/products/:id' /* Los 2 puntos significa que es un parámetro*/
const CallbackProductId = (request, response) => {
  const {id} = request.params;
  response.json({
    id,
    name: 'Camera',
    price: 2000
  })
}
app.get( productId, CallbackProductId)


// PARÁMETROS CON QUERY

// Users
const endPointUsers = '/users'

const CallbackUsers = (request, response) =>{
  const {limit, offset} = request.query;
  if (limit & offset ) {
    response.json({
      limit : limit,
      offset : offset
    })
  }else{
    response.send('No hay coincidencias')
  }
};
app.get(endPointUsers, CallbackUsers)
























app.listen(port, ()=>{
  console.log('Mi puerto ', port)
})
