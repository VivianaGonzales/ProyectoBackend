const { Turno } = require('../models/turnos')

const apiController = {
    async apiGet(req,res){
        const listadoDeTurnos = await Turno.find()
        res.json(listadoDeTurnos)
    },
    async apiGetOne(req,res){
        const listadoDeTurnos = await Turno.findOne(req.params)
        res.json(listadoDeTurnos)
    },
    async apiGetList(req,res){
        const listadoDeTurnos = await Turno.find(req.query)
        res.json(listadoDeTurnos)
    },
    async apiGetId(req,res){
        const listadoDeTurnos = await Turno.findById(req.params.id)
        res.json(listadoDeTurnos)
    },
    async apiPost(req,res){
        try {
            const nuevoTurno = new Turno(req.body)
            await nuevoTurno.save()
            res.status(201).json(nuevoTurno)
        } catch (error) {
            res.status(400).json(error)
        }
    },
    async apiPut(req,res){
        await Turno.findByIdAndUpdate(req.params.id, req.body)
        const editado = await Turno.findById(req.params.id)
        res.status(201).json(editado)
    },
    
    async apiDelete(req, res){
        await Turno.findByIdAndDelete(req.params.id)
        res.status(200).send('El id ingresado ha sido borrado')
    }
}


module.exports = apiController