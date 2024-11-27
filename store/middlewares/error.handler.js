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

module.exports = { middlewareHttpError, errorHandler }
