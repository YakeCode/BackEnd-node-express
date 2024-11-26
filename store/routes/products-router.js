//@ts-check

const express = require ('express')

const ProductsService = require('../services/product-service')

const router = express.Router(); /*Se genera un router para los productos*/

const service = new ProductsService();

/*  RUTAS ESPECIFICAS */

// Products
const rutaProducts= '/';

const CallbackProducts = async (request, response)=>{
const products = await service.find();
  response.json(products)
}
router.get(rutaProducts, CallbackProducts) /* Se cambia la palabra app por router */

//Filter
const productFilter = '/filter'

const CallbackFilter = async (request, response) => {
  await response.send('soy filter')
}

router.get(productFilter,CallbackFilter)

// RUTAS DINÁMICAS

// Recibiendo Parámetros

const productId = '/:id' /* Los 2 puntos significa que es un parámetro*/
const CallbackProductId = async (request, response) => {
  const {id} = request.params;
  const product = await service.findOne(id)
  response.json(product)
}
router.get( productId, CallbackProductId)

/* POST */
const routePostProduct = '/'
const CallbackPostProduct = async (request, response)=>{
  try{
    const body = request.body
    const newProduct = await service.create(body)/* Body es la información que se le manda al servidor*/
    response.status(201).json(newProduct)
  } catch (error) {
    response.status(400).json({
      message : error.message
    })
  }
}

router.post(routePostProduct, CallbackPostProduct)

/* PUT */

const routePutProduct = '/:id'
const CallbackPutProduct = async (request, response)=>{
  const { id } = request.params;
  const body = request.body
  const updateProduct = await service.update(id, body)
  response.json(updateProduct)
}

router.put(routePutProduct, CallbackPutProduct)

/* PATCH */

const routePatchProduct = '/:id'
const  CallbackPatchProduct = async (request, response)=>{
  try{ /* Para capturar errores */
    const { id } = request.params;
  const body = request.body
  const updateProduct = await service.update(id, body)
  response.status(200).json(updateProduct)
  } catch (err){
    response.status(404).json({
      message: err.message
    })
  }

}

router.patch(routePatchProduct, CallbackPatchProduct)

/* Delete */

const routeDeleteProduct = '/:id' /*Ruta exige el id*/

const CallbackDeleteProduct = async (request, response)=>{
  const { id } = request.params;/*trae el id de los parámetros*/
  const deleteProduct = await service.delete(id)
  response.json(deleteProduct)
}

router.delete(routeDeleteProduct, CallbackDeleteProduct) /*Ejecuta el método Delete*/



module.exports = router /* Se exporta el modulo completo */
