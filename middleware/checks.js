const {check} = require ('express-validator')

const checks = [
    check('mascota')
        .notEmpty().withMessage('El campo mascota es requerido')
        .isString().withMessage('El campo mascota debe ser un string'),
    check('dueño')
        .notEmpty().withMessage('El campo dueño es requerido')
        .isString().withMessage('El campo dueño debe ser un string'),
    check('edad')
        .notEmpty().withMessage('El campo edad es requerido')
        .isString().withMessage('El campo edad debe ser un string'),
    check('servicio')
        .notEmpty().withMessage('El campo servicio es requerido')
        .isString().withMessage('El campo servicio debe ser un string'),
    check('turno')
        .notEmpty().withMessage('El campo turno es requerido')
        .isString().withMessage('El campo turno debe ser un string'),
    check('descuento')
        .notEmpty().withMessage('El campo descuento es requerido')
        .isString().withMessage('El campo descuento debe ser un string')
]

module.exports = checks