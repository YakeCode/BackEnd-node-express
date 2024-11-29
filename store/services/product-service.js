//@ts-check

const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom')

class ProductsService {

  constructor(){
    this.products = [];
    this.generate();
  }

  async generate(){
    const limit = 500
    for (let index = 0; index < limit; index++){
      this.products.push({
        id: faker.string.uuid(),
        name :faker.commerce.productName(),
        price : parseInt(faker.commerce.price(),10),
        image : faker.image.url(),
        isBlock : faker.datatype.boolean()
      })
    }
  }

  async create (data) { /* data es lo que entra del cliente */
    const newProduct = {
      id: faker.string.uuid(),
      ...data,
    }
    this.products.push(newProduct)
    return newProduct;
  }

  find (){
    return new Promise ((resolve, reject)=>{
      setTimeout(()=>{
        resolve(this.products)
      }, 2000)
    })

  }

  async findOne(id){
    const product=  this.products.find(item => item.id === id)
    if (!product){
      throw boom.notFound('Product not found')
    }else if (product.isBlock === true ) {
      throw boom.conflict('Product is block')
    }


    return product;
  }

  async update(id, changes){
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1){
      throw boom.notFound('Product not found');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes
    }
    return this.products[index];
  }

  async delete(id){
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1){
      throw boom.notFound('Product not Found')
    }
    this.products.splice(index, 1)
    return {
      id,
      message: 'Successful Delete'
    }
  }

}

module.exports = ProductsService;
