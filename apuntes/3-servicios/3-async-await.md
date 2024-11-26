# Async Await

Dentro de los servicios a cada método le podemos poner async para que node lo trate de forma asíncrona

- 1 Dentro del servicio

**Async define que es un servicio asincrono**

```javascript
  async create (data) { /* data es lo que entra del cliente */
    const newProduct = {
      id: faker.string.uuid(),
      ...data,
    }
    this.products.push(newProduct)
    return newProduct;
  }
```

- 2 Dentro de la ruta

utilizamos **Async** para decir que el callback es una función asíncrona y el **Await** lo utilizamos para indicar que estamos devolviendo una promesa

Tambien se utiliza **TRY Y CATHC** para tener un mejor manejo de errores en el servidor

```Javascript
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
```
