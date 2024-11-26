//@ts-check

const express = require('express')
const productsRouter = require ('./products-router')
const usersRouter = require ('./users')

const routerApi = (app)=>{
  /*Versionar rutas */
  const routerMaster = express.Router();
  app.use('/api/v1', routerMaster);

  /*AplicarVersionamiento a las rutas */

  routerMaster.use('/products', productsRouter)
  routerMaster.use('/users', usersRouter)
}

module.exports = routerApi;
