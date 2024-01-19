const swaggerJSDoc = require('swagger-jsdoc')
const swaggerJsDoc = require ('swagger-jsdoc')
const swaggerUiExpress = require ('swagger-ui-express')

const options = {
    definition: {
        openapi: '3.0.1',
        info:{
            title: 'Crud de turnos para baños',
            description: 'Este es el crud para ver todos mis turnos',
            version: '1.0.0'
        },
        servers: [
            {
                url:'/index'
            },
            {
                url:'/api'
            }
        ] 
    },
    apis: ['utils/specification.yaml']
}

const swaggerSpec = swaggerJSDoc (options);
module.exports = (path,app) => app.use(path,swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerSpec))