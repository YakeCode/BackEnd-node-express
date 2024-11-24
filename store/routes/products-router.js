const express = require ('express')

const ProductsService = require('../services/product-service')

const router = express.Router(); /*Se genera un router para los productos*/

const service = new ProductsService();

/*  RUTAS ESPECIFICAS */

// Products
const rutaProducts= '/';

const CallbackProducts = (request, response)=>{
const products = service.find();
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
  const product = service.findOne(id)
  response.json(product)
}
router.get( productId, CallbackProductId)

/* POST */
const routePostProduct = '/'
const CallbackPostProduct = (request, response)=>{
  const body = request.body
  response.status(201).json({
    message: 'Created',
    data : body
  })
}

router.post(routePostProduct, CallbackPostProduct)

/* PUT */

const routePutProduct = '/:id'
const CallbackPutProduct = (request, response)=>{
  const { id } = request.params;
  const body = request.body
  response.json({
    message: 'overwritten',
    data : body,
    id
  })
}

router.put(routePutProduct, CallbackPutProduct)

/* PATCH */

const routePatchProduct = '/:id'
const CallbackPatchProduct = (request, response)=>{
  const { id } = request.params;
  const body = request.body
  response.json({
    message: 'Update Product',
    data : body,
    id
  })
}

router.patch(routePatchProduct, CallbackPatchProduct)

/* Delete */

const routeDeleteProduct = '/:id' /*Ruta exige el id*/
const CallbackDeleteProduct = (request, response)=>{
  const { id } = request.params;/*trae el id de los parametros*/
  response.json({ /* No necesita un cuerpo */
    message: 'Successfully deleted',
    id
  })
}

router.delete(routeDeleteProduct, CallbackDeleteProduct) /*Ejecuta el método Delete*/



module.exports = router /* Se exporta el modulo completo */
