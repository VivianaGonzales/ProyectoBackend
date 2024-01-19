const express = require ('express')
const router = express.Router()
const axiosController = require ('../controllers/axiosController')

router.get('/datosApi',axiosController.axiosGet)

module.exports = router