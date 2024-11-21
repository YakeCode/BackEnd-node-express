const productsRouter = require ('./products-router')
const usersRouter = require ('./users')

const routerApi = (app)=>{
  app.use('/products', productsRouter)
  app.use('/users', usersRouter)
}

module.exports = routerApi;
