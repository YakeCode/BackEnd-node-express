# Manejo Cors o Permisos de acceso

Los errores de cors se generan por lo general cuando la petición se esta haciendo desde un origen diferente a la de la API. Para solucionar tenemos un par de erramientas

---

- 1 Instalar la librería Cors

```Bash
npm install cors
```

- 2 En el archibvo del servidor lo incorporamos

```Javascript
const cors = require('cors')
app.use(cors())
```

**const cors = require('cors') :** Con esta configuración daría acceso a cualquier origen

---

# Configurar Permisos para dominios personalizados

- 1 En el archivo del servidor crearemos un array en donde vendrán los dominios que tendran acceso para generar peticiones.

```Javascript
const domains = ['http://localhost:8080', 'http://localhost:8082']

```

- 2 Creamos el código que dejara solo utilizar dichos dominios i le pasaremos esto a la biblioteca cors

```Javascript
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

```
