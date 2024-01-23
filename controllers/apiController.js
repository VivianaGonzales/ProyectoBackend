const { Turno } = require('../models/turnos')

const apiController = {
    async apiGet(req, res) {
        try {
            const listadoDeTurnos = await Turno.find()
            res.json(listadoDeTurnos)
        } catch (error) {
            res.status(502).json(error)
        }
    },
    async apiGetOne(req, res) {
        try {
            const listadoDeTurnos = await Turno.findOne(req.params)
            res.json(listadoDeTurnos)
        } catch (error) {
            res.status(502).json(error)
        }
    },
    async apiGetList(req, res) {
        try {
            const listadoDeTurnos = await Turno.find(req.query)
            res.json(listadoDeTurnos)
        } catch (error) {
            res.status(502).json(error)
        }
    },
    async apiGetId(req, res) {
        try {
            const listadoDeTurnos = await Turno.findById(req.params.id)
            res.json(listadoDeTurnos)
        } catch (error) {
            res.status(502).json(error)
        }
    },
    async apiPost(req, res) {
        try {
            const nuevoTurno = new Turno(req.body)
            await nuevoTurno.save()
            res.status(201).json(nuevoTurno)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    async apiPut(req, res) {
        await Turno.findByIdAndUpdate(req.params.id, req.body)
        const editado = await Turno.findById(req.params.id)
        res.status(201).json(editado)
    },

    async apiDelete(req, res) {
        await Turno.findByIdAndDelete(req.params.id)
        res.status(200).send('El id ingresado ha sido borrado')
    }
}

module.exports = apiController