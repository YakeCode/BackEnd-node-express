// corriendo primer servidor

const express = require ('express')
const routerApi = require ('./routes/router.js')
const cors = require('cors')
/* MIDDLEWARES */
const { middlewareHttpError, errorHandler, boomErrorHandler } = require ('./middlewares/error.handler.js')

const app = express(); // Crear APP

const port = 3210; // puerto en el cual va a correr la app

app.use(express.json()) //MIDDLEWARE para poder recibir jsonÇ

const domains = ['http://localhost:8080', 'http://localhost:8082']
const options = {
  origin: (origin, Callback)=>{
    if (domains.includes(origin)){
      Callback(null, true)
    }else {
      Callback(new Error("Don't Access"))
    }
  }
}
app.use(cors(options))

app.get('/'/*ruta */, (request, response)=>{/*Callback */
  response.send('hola enviado desde el server en express')
})

routerApi (app)
/* MIDDLEWARES */
/* middleware debe ir después del routing */

app.use( middlewareHttpError )
app.use(boomErrorHandler)
app.use( errorHandler)

app.listen(port, ()=>{
  console.log('Mi puerto ', port)
})
