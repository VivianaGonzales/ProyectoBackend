const express = require ('express')
const router = express.Router()
const apiController = require('../controllers/apiController')
const {validarID} = require ('../middleware/validarId')
const checks = require ('../middleware/checks')
const {validarChecks} = require ('../middleware/validarChecks')
const {validarDescuento} = require ('../middleware/validarDescuento')
const descuento = require('../middleware/descuento')

router.get('/info',apiController.apiGet)
router.get('/one/:telefono',apiController.apiGetOne)
router.get('/buscar',apiController.apiGetList)
router.get('/id/:id',validarID,apiController.apiGetId)
router.post('/crear',checks,validarChecks,descuento, validarDescuento,apiController.apiPost)
router.put('/editar/:id',validarID,checks,validarChecks,apiController.apiPut)
router.delete('/borrar/:id',validarID,apiController.apiDelete)

module.exports = router