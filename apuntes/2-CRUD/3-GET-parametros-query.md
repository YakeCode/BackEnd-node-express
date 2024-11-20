# GET Parámetros Query

Cuando escribes una dirección web (URL), los parámetros query son como notas que le dejas al servidor para pedir algo específico. Estas notas van después de un signo de interrogación (?) en la URL.

**Ejemplo**

```Javascript
const URL = 'https://example.com?categoria=zapatos&color=negro'
```

Esto significa:

- categoría: Le dices al servidor que quieres "zapatos".
- color: También le pides que sean "negros".

---

### Casos de uso comunes

- **Paginar :** Que la pagina contenga máximo cierta cantidad de resultados y sis sobrepasa el numero máximo crea una nueva pagina hasta que se terminen la cantidad de productos
  - page , limit & offset
- **Filtrar :** Se utiliza para filtrar según parámetros dados
  - producto, categoría, idioma, localidad, precio, marca, etc

NOS SIRVE MAS QUE TODO PARA CREAR FILTROS.

## Parámetros Query Más Usados

- **search**

  - **Descripción**: Usado para buscar un término en una base de datos o en una página.
  - **Ejemplo**: `?search=javascript`
  - **Función**: Buscar información relacionada con "javascript".

- **page**

  - **Descripción**: Indica el número de página cuando los datos se muestran en partes.
  - **Ejemplo**: `?page=2`
  - **Función**: Mostrar la página 2 de los resultados.

- **limit** o **per_page**

  - **Descripción**: Define cuántos resultados mostrar por página.
  - **Ejemplo**: `?limit=10`
  - **Función**: Mostrar solo 10 elementos.

- **sort**

  - **Descripción**: Especifica el orden de los resultados.
  - **Ejemplo**: `?sort=asc` o `?sort=desc`
  - **Función**: Ordenar resultados de manera ascendente (asc) o descendente (desc).

- **filter** o **category**

  - **Descripción**: Filtrar datos por categoría o característica específica.
  - **Ejemplo**: `?category=electronics`
  - **Función**: Mostrar solo productos de la categoría "electronics".

- **id**

  - **Descripción**: Selecciona un elemento específico por su identificador único.
  - **Ejemplo**: `?id=123`
  - **Función**: Buscar información relacionada con el elemento 123.

- **lang**

  - **Descripción**: Selecciona el idioma en que se deben mostrar los datos.
  - **Ejemplo**: `?lang=es`
  - **Función**: Mostrar información en español.

- **timestamp**

  - **Descripción**: Enviar una marca de tiempo para solicitar datos relacionados con una fecha específica.
  - **Ejemplo**: `?timestamp=1697846400`
  - **Función**: Obtener datos de un momento específico.

- **token**

  - **Descripción**: Proporciona un identificador para autenticar o validar la solicitud.
  - **Ejemplo**: `?token=abc123`
  - **Función**: Asegurar que la solicitud esté autorizada.

- **q**
  - **Descripción**: Abreviatura común para "query" en búsquedas rápidas.
  - **Ejemplo**: `?q=libros`
  - **Función**: Buscar información relacionada con "libros".
