const loggers = require('../../helpers/logger')

const { Ejemplo } = require('../../database/models')

const postEjemplo = async (req, res) => {
    try {
        loggers.info(req.headers)
        const a = await Ejemplo.create({
            title: req.body.title,
            body: req.body.body,
        })
        res.json(a)
    } catch (e) {
        loggers.error(JSON.stringify(e))
        const code = e.code ? e.code : 500
        const message = e.message ? e.message : 'Ha ocurrido un error interno'
        res.status(code).json({ codigoRespuesta: 99, message })
    }
}
module.exports = {
    postEjemplo,
}
