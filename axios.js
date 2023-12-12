import axios from 'axios'

const listado = async () => {
    const { data } = axios.get('https://proyectobackend-production-ad9c.up.railway.app/api/info')
    return data 
}

const nuevoTurno = async (mascota,dueño,telefono,edad,raza,servicio,turno,descuento) => {
    const { data } = await axios.post('https://proyectobackend-production-ad9c.up.railway.app/api/crear', {
        mascota,
        dueño,
        telefono,
        edad,
        raza,
        servicio,
        turno,
        descuento
    }) 
    return data
}

const editarTurno = async (mascota,dueño,telefono,edad,raza,servicio,turno,descuento,id) => {
    const { data } = await axios.put('https://proyectobackend-production-ad9c.up.railway.app/api/editar' + id, {
        mascota,
        dueño,
        telefono,
        edad,
        raza,
        servicio,
        turno,
        descuento
    }) 
    return data
}

const borrarTurno = async (id) => {
    const { data } = await axios.delete('https://proyectobackend-production-ad9c.up.railway.app/api/borrar/' +id)
    return data 
}
