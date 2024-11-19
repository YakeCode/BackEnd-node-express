# GET Recibir Parámetros

Este método también nos permite utilizar rutas dinámicas para cuando una ruta no es estática si no que podría variar. Usamos el prefijo **:** en la ruta para definir un **"parámetro"** que captura el valor dinámico

**Explicación Breve**

```Javascript
    const ruta = '/products/:rutaDinámica';
    const callback = (request, response)=>{
        const {rutaDinámica} = request.params; /*Extrae lo que contenga la ruta dinámica*/
        response.json({
            rutaDinámica /*devuelve al cliente "Navegador" lo que hay en ruta dinámica*/
        })
    }
    app.get( ruta, callback)
```

**Ejemplo :**

```Javascript
    const productId = '/products/:productId' /* Los 2 puntos significa que es un parámetro y a su vez la ruta dinamica*/

    const CallbackProductId = (request, response) => {
        {//DESESTRUCTURACIÓN DE PROPIEDADES

        const {productId} = request.params; /*La propiedad que ingresamos en los corchetes se debe }llamar igual a el nombre que le dimos a la ruta dinámica*/}

        const  productId = request.params.productId;/*Esta seria otra forma de acceder a esa propiedad*/

        response.json({
        id : productId,
        name: 'Camera',
        price: 2000
        })
    }

```

También según sea el caso, podemos tener rutas dinámicas añadidas

```Javascript
const ruta = '/products/:category/:productId';

const callback = (request, response) => {
    const { category, productId } = request.params;
    response.json({
        category,
        productId
    });
};

app.get(ruta, callback);

```
