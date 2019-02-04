const express = require('express')
const bodyParser = require('body-parser')

const ControladorProductos = require('./ControladorProductos')

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.get('/', (req, res) => res.send('Hello World!'))

app.get('/productos', (req, res) => {
  ControladorProductos.todoProductos(req, res)
})

app.get('/productos/:id', (req, res) => {
  ControladorProductos.productoId(req, res)
})

app.post('/productos/:id', (req, res) => {
  ControladorProductos.elminarProducto(req, res)
})

app.post('/productos', (req, res) => {
  ControladorProductos.agregarProducto(req, res)
})

app.put('/productos', (req, res) => {
  ControladorProductos.actualizarProducto(req, res)
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
