const axiosController = {
    async axiosGet(req, res) {
        try {
            const { data } = await axios.Get('https://proyectobackend-production-ad9c.up.railway.app/api/info')
            return data
        } catch (error) {
            
        }
    }

}

module.exports = axiosController