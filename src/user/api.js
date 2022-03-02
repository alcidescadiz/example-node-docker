const express = require('express')
const user = express.Router()

user.get('/',(req, res) => {
    res.status(400).send('Bienvenido a esta Api levantada con docker')

})

module.exports = user