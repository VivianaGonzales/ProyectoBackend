const {check} = require ('express-validator')

const descuento = [
    check ('descuento')
        .notEmpty().withMessage('El campo descuento es requerido')
        .isString().withMessage('El campo descuento debe ser un string')
]

module.exports = descuento