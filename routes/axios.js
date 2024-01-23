const express = require ('express')
const router = express.Router()
const axiosController = require ('../controllers/axiosController')

router.get('/datosapi',axiosController.axiosget)

module.exports = router