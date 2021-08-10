const loggers = require('./logger')

const validaRequest = (req, schema) => {
    const result = schema.validate(req.body)
    loggers.info(result)
    if (result.error) {
        const errorMessage = { code: 403, message: 'Error de Validación' }
        throw errorMessage
    }
}

module.exports = {
    validaRequest,
}
