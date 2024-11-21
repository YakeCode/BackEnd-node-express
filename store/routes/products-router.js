const express = require ('express')
const { faker } = require('@faker-js/faker');

const router = express.Router(); /*Se genera un router para los productos*/

/*  RUTAS ESPECIFICAS */

// Products
const rutaProducts= '/';

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
router.get(rutaProducts, CallbackProducts) /* Se cambia la palabra app por router */

//Filter
const productFilter = '/filter'

const CallbackFilter = (request, response) => {
  response.send('soy filter')
}

router.get(productFilter,CallbackFilter)

// RUTAS DINÁMICAS

// Recibiendo Parámetros

const productId = '/:id' /* Los 2 puntos significa que es un parámetro*/
const CallbackProductId = (request, response) => {
  const {id} = request.params;
  response.json({
    id,
    name: 'Camera',
    price: 2000
  })
}
router.get( productId, CallbackProductId)

module.exports = router /* Se exporta el modulo completo */
