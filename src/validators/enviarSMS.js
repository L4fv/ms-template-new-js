const Joi = require('joi')

const valEnviarSMS = Joi.object({
    idVenta: Joi.number(),
    idMedico: Joi.number().optional(),
    tipoDocumento: Joi.string().optional(),
    idCitaToken: Joi.string().optional(),
    paramSearch: Joi.string().optional().allow('', null),
})

module.exports = {
    valEnviarSMS,
}
