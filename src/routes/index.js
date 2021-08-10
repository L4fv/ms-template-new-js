const express = require('express')

const router = express.Router()
// Middleware
const { postEjemplo } = require('../controllers/ejemplo')

router.post('/orq/public/datos-persona/crear', postEjemplo)
module.exports = router
