# Creando un servidor Con Express

**Express :** Es un framework de Node.js para crear aplicaciones web y API.

Después de tener el entorno configurado para crear el servidor seguimos los siguientes pasos.

---

- Importar express

```Javascript
    const express = require('express');
```

**require :** Carga la biblioteca en tu proyecto para que puedas usar sus funcionalidades.

- Crear una instancia o aplicación de Express

```Javascript
    const app = express();
```

La instancia app será el servidor en si y se usa para definir rutas y manejar las solicitudes y respuestas

- Definir un puerto en el cual va a correr el servidor

```Javascript
    const port = 3000;
```

---

- Configuración de la ruta y lo que hace con el método **GET**.

```Javascript
    app.get('/' /*ruta */, (request, response) => { /*Callback */
  response.send('hola enviado desde el server en express');
});
```

Esto indica qué debe hacer el servidor cuando recibe una solicitud **HTTP** del tipo **GET** en la URL raíz **(/)**.

- app.get(): Método para manejar solicitudes HTTP GET. Tiene dos argumentos:

**RUTA =**'/': La ruta que el servidor debe "escuchar". Aquí es la raíz del sitio (http://localhost:3000/).

**CALLBACK =** (request, response) => {...}: Es una función de callback que se ejecuta cuando alguien visita la ruta especificada.

- request: Contiene detalles de la solicitud hecha por el cliente (navegador).
- response: Es lo que envías de vuelta al cliente como respuesta.
- response.send(): Envía una respuesta al cliente.

---

- Iniciar el servidor

```Javascript
    app.listen(port, () => {
        console.log('Mi puerto ', port);
    });
```

Arrancando el servidor para que escuche las solicitudes entrantes en el puerto definido
