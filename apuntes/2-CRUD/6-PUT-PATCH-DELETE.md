# PUT, PATCH y DELETE

# PUT :

El método **PUT** se utiliza reemplazar toda la información del recurso con la nueva que envíes. Es como sobrescribir un archivo completo. En este método aunque cambiramos una sola cosa, deberia,os enviar toda la información para que se actualice en totalidad.

```Javascript

/* REQUERIMIENTO*/

/*Necesita enviar el cuerpo del recurso completo*/

{
	"name" : "Camera",
	"price" : 1500,
	"image" : "https://images.pexels.com/photos/838680/pexels-photo-838680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
}

/* PUT */

const routePutProduct = '/:id' /*Necesita el id */
const CallbackPutProduct = (request, response)=>{
  const { id } = request.params; /*Trae el ID de los parámetros*/
  const body = request.body /*Necesita toda la misma información que se manda en un post*/
  response.json({
    message: 'overwritten',
    data : body,
    id
  })
}

router.put(routePutProduct, CallbackPutProduct)
```

# PATH :

A diferencia de **PUT**, **PATCH** es mas flexible, pues este nos deja cambiar el recurso de forma parcial, por lo cual no necesito enviar todos los atributos

**IMPORTANTE**

Para realizar este método debemos tener el **ID** para saber cual es el producto que deseo editar

### En el servidor

Lo deberíamos tener de esta forma.

```Javascript
/* PATCH */

const routePatchProduct = '/:id' /*Ruta exige el id*/
const CallbackPatchProduct = (request, response)=>{
  const { id } = request.params;/*trae el id de los parametros*/
  const body = request.body
  response.json({
    message: 'Update Product',
    data : body,
    id
  })
}

router.patch(routePatchProduct, CallbackPatchProduct) /*Ejecuta el método Patch*/
```

### Este seria el cuerpo del envió

```Javascript
{
	"price" : 1200, /* Solo actualice el precio*/
}
```

# DELETE

Este método es muy delicado, para esto este método **NO** recibe un Body, solo debe recibir el id al cual se esta dirigiendo para eliminar el recurso especifico

```Javascript
/* Delete */

const routeDeleteProduct = '/:id' /*Ruta exige el id*/
const CallbackDeleteProduct = (request, response)=>{
  const { id } = request.params;/*trae el id de los parametros*/
  response.json({ /* No necesita un cuerpo */
    message: 'Successfully deleted',
    id
  })
}

router.delete(routeDeleteProduct, CallbackDeleteProduct) /*Ejecuta el método Delete*/
```
