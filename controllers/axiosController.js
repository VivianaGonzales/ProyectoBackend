const axios = require('axios')

const axiosController =  {
    async axiosget(req, res) {
        try {
            const {data} = await axios.get('https://fakestoreapi.com/products')
            res.status(200).json(data)
        } catch (error) {
            res.status(502).json(error)
        }
    }
}


module.exports = axiosController