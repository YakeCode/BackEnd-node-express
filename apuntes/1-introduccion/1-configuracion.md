# Configuración

- Crear carpeta en la cual se va a trabajar

- gitIgnore : gitignore.io para crear el git ignore

**Archivos de configuración**

- .editorconfig : Se instala la extensión y se copia esta configuración.

```Javascript
    # Editor configuration, see https://editorconfig.org
    root = true

    [*]
    charset = utf-8
    indent_style = space
    indent_size = 2
    insert_final_newline = true
    trim_trailing_whitespace = true

    [*.js]
    quote_type = single

    [*.md]
    max_line_length = off
    trim_trailing_whitespace = false
```

- .slintrc.json : Copiamos la siguiente configuración

```Javascript
    {
        "parserOptions": {
        "ecmaVersion": 2018
        },
        "extends": ["eslint:recommended", "prettier"], /*Estandar general de slint con prettier*/
        "env": {
        "es6": true, // Estandar es6
        "node": true,
        "jest": true
         },
        "rules": {
        "no-console": "warn"
        }
    }
```

**Archivo inicial**

- index.js

**Crear tareas en el package.json**

```Javascript
{
  "name": "store",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev" :"nodemon index.js",
    /*Es una herramienta que reinicia automáticamente el servidor de Node.js cada vez que detecta cambios en el código. Esto mejora la experiencia de desarrollo, evitando reinicios manuales.*/

    "start" : "node index.js",/*ejecuta el archivo manual*/

    "lint" : "eslint", // Para la buenas practicas de desarrollo

    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "MIT"
}
```

## Instalar dependencias

Para que la configuración anterior funcione

```Bash
    npm i nodemon eslint eslint-config-prettier eslint-plugin-prettier prettier -D
```

---

## Instalar Express

Instalar express como una dependencia de producción y configurar

- Instalar Express

```Bash
    npm i express
```

- Incorporar express en mis archivos donde lo necesito

```Javascript
    const express = require ('express')
```
