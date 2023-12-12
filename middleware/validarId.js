const{Turno} = require ('../models/turnos')


const validarID = async (req,res,next) =>{
    try {
        const buscar = await Turno.findById(req.params.id)
        if (buscar!== null) {
            next()
        }else {
            res.status(401).json({
                msg: "el id" + req.params.id + " es inválido"
            })
        }
    } catch (error) {
        res.status(401).json(error)
    }
}

module.exports = {validarID}