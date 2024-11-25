# Servicios

Los servicios es donde ponemos la lógica del negocio en el cual declaramos todos los casos de uso para empezar a interactuar con la lógica que debemos implementar (consultas, compras, transacciones etc)

# The Clean Architecture

La **Clean Architecture** es un diseño para organizar el código de un proyecto. Divide la aplicación en capas, cada una con una responsabilidad específica, para que el código sea fácil de mantener y entender.

---

## 1. La idea principal

El código se organiza en **capas** que cumplen diferentes funciones:

- Las capas **internas** contienen la lógica principal del negocio (lo esencial).
- Las capas **externas** manejan detalles como bases de datos, frameworks o APIs.

La lógica central de tu app no depende de detalles técnicos. Así, si cambias algo externo (como pasar de MySQL a MongoDB), la lógica central sigue igual.

---

## 2. Las capas

Imagina un círculo con 4 capas principales, desde el núcleo (lo más importante) hacia afuera (los detalles):

### a) **Entities (Entidades)** -> ESTRUCTURA ->SERVICIOS

- Representan las **reglas de negocio más puras**.
- Son independientes de todo lo demás.
- **Ejemplo**:  
  Si tienes una app de e-commerce, esta capa podría incluir una clase `Product` que sabe calcular descuentos.

# b) **Use Cases (Casos de Uso)** -> LÓGICA Y ESTA A SU VES SON LOS SERVICIOS

- Describe **qué hace tu app** según las reglas de negocio.
- Coordina las entidades para cumplir una tarea específica.
- **Ejemplo**:  
  Un caso de uso sería "crear un pedido". Usa la lógica de entidades como `Product` o `Order` para lograrlo.

### c) **Interface Adapters (Adaptadores)** -> ROUTING Y MIDDLEWARES

- **Traducen** datos entre el núcleo y el mundo exterior.
- Aquí manejas cosas como convertir una solicitud HTTP en datos que tu lógica pueda usar.
- **Ejemplo**:  
  Recibes un `JSON` de una API y lo conviertes en un objeto `Product`.

### d) **Frameworks & Drivers**

- Contiene **herramientas externas**: bases de datos, APIs, servidores, etc.
- Es lo más fácil de reemplazar porque el núcleo no depende de esto.
- **Ejemplo**:  
  Si decides cambiar de Express.js a Fastify, no afecta la lógica central.

---

## 3. Regla de Dependencias

Cada capa **solo puede depender de las capas más internas**, nunca al revés.

- Esto significa que las entidades (capa más interna) **nunca** saben qué frameworks, bases de datos o servidores usas.
- **Ejemplo**:  
  Si usas MongoDB, la lógica central no tiene que saberlo, solo le importa que le pasen los datos correctos.

---

## 4. Ventajas

- **Facilidad para cambios**: Cambiar algo externo (como la base de datos) no rompe toda la app.
- **Código limpio y organizado**: Cada cosa está en su lugar.
- **Facilidad para probar**: Como las capas están separadas, puedes probarlas individualmente sin preocuparte por los detalles externos.

---

## Ejemplo práctico sencillo

Si haces una app que calcula el precio final de un producto con descuentos:

1. **Entidades**:

   - Clase `Product` con un método `calculateFinalPrice()`.

2. **Use Case**:

   - Caso de uso: `ApplyDiscount`. Recibe un producto y aplica un descuento.

3. **Interface Adapter**:

   - Un controlador convierte una solicitud HTTP en un producto y llama al caso de uso.

4. **Framework & Drivers**:
   - Express.js para manejar solicitudes y MongoDB para guardar los productos.

---
