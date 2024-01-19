const app = require('./app')
require('dotenv').config()

const port = process.env.PORT || 9000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(`Example documentation http://localhost:${port}/swagger `)
  })