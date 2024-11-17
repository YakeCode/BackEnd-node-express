// corriendo primer servidor

const express = require ('express')

const app = express(); // Crear APP

const port = 3000; // puerto en el cual va a correr la app

app.get('/'/*ruta */, (request, response)=>{/*Callback */
  response.send('hola enviado desde el server en express')
})

/* Ruta Products */

const rutaProducts= '/products'

const CallbackProducts = (request, response)=>{
  response.json({
    name:"DRON",
    price:900
  })
}

app.get(rutaProducts, CallbackProducts)

app.listen(port, ()=>{
  console.log('Mi puerto ', port)
})
