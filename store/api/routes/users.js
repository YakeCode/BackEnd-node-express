//@ts-check

const express = require ('express')
const { faker } = require('@faker-js/faker');

const router = express.Router();

/* Ruta padre http://localhost:3210/api/v1 */


// PARÁMETROS CON QUERY

// Users
const endPointUsers = '/'

const CallbackUsers = (request, response) =>{
  const {limit, offset} = request.query;
  if (limit & offset ) {
    response.json({
      limit : limit,
      offset : offset
    })
  }else{
    response.send('No hay coincidencias')
  }
};
router.get(endPointUsers, CallbackUsers)

module.exports = router
