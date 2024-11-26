# Servicos

En los servicios idealmente vamos a crear un archivo por servicio, es decir si tenemos productos, clientes, etc.. Creariamos uno por cada uno de ellos

- 1 Creamos una carpeta llamada servicios, en esta irán cada uno de los archivos que anteriormente mencionamos.

- 2 En el archivo declaramos el servicio con su lógica y exportamos este archivos

```Javascript
//@ts-check

const { faker } = require('@faker-js/faker');

class ProductsService {

  constructor(){
    this.products = [];
    this.generate();
  }

  generate(){
    const limit = 500
    for (let index = 0; index < limit; index++){
        this.products.push({
        id: faker.string.uuid(),
        name :faker.commerce.productName(),
        price : parseInt(faker.commerce.price(),10),
        image : faker.image.url(),
      })
    }
  }

  create (data) { /* data es lo que entra del cliente */
    const newProduct = {
      id: faker.string.uuid(),
      ...data, /*Los Datos que me envió el cliente*/
    }
    this.products.push(newProduct) /*insertamos al código los datos que envió el cliente*/
    return newProduct;
  }

  find (){
    return this.products;
  }

  findOne(id){
    return this.products.find(item => item.id === id)
  }

  update(id, changes){
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1){
      throw new Error ('Product not found')
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes
    }
    return this.products[index];
  }

  delete(id){
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1){
      throw new Error ('Product not found')
    }
    this.products.splice(index, 1) /*elimina un elemento desde la posición del index*/
    return {
      id,
      message: 'Successful Delete'
    }
  }

}

module.exports = ProductsService; /* Exportamos el modulo*/
```
