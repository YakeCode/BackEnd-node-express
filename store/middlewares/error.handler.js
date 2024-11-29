const middlewareHttpError = (error, request, response, next)=>{
  console.error(error)
  next(error)/*pasa el error al siguiente middleware*/
}

const errorHandler = (error, request, response, next)=>{
    response.status(500).json({
      message:error.message,
      stack: error.stack /* Para saber donde sucedió el error */
    })
}

const boomErrorHandler = (error, request, response, next)=>{
  if (error.isBoom) { //Valida si el el error es tipo Boom
    const { output} = error
    response.status(output.statusCode).json(output.payload)
    /*Para leer el status code se utiliza el .statusCode*/
    /*La info que va en el json viene de la librería en .payload */
  }else{
    next(error)
  }
}


module.exports = { middlewareHttpError, errorHandler, boomErrorHandler}

