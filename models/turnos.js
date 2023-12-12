const {Schema, model} = require('mongoose')

const schema = new Schema({
    mascota: {
        type: String,
        required: true
    },
    dueño: {
        type: String,
        required: true 
    }, 
    telefono: {
        type: String,
        required: true
    }, 
    edad: {
        type: String,
        required: true
    }, 
    raza: {
        type: String,
    }, 
    servicio: {
        type: String,
        required: true,
        enum: ['corte', 'baño', 'baño y corte']
    },
    turno: {
        type: String,
        required: true
    },
    descuento: {
        type: String,
        required: true
    }
})

const Turno = model('Turno',schema)

module.exports = {Turno}