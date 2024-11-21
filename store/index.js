// corriendo primer servidor

const express = require ('express')
const routerApi = require ('./routes/router.js')

const app = express(); // Crear APP

const port = 3210; // puerto en el cual va a correr la app

app.get('/'/*ruta */, (request, response)=>{/*Callback */
  response.send('hola enviado desde el server en express')
})

routerApi (app)

app.listen(port, ()=>{
  console.log('Mi puerto ', port)
})
