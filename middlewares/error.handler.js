function logErrors (err, req, res, next) {
    console.log('logErros');
    console.error(error);
    next(err);
}
function errorHandler(err, req, res, next ) {
    console.log('errorHandler');
    
    res.status(500).json({
        message: error.message,
        stack: error.stack,
    });
    
    /* console.error(err);
    next(err); */
}

function boomErrorHandler(error, req, res, next ){
    if (err.isBoom) {
        const { output} = err;
        res.status(output.statusCode).json(output.payload/* {
            message: err.message,
            stack: err.stack,
        } */)
    }
    next(err);
}

module.exports = {logErrors, errorHandler , boomErrorHandler}