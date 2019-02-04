let data = require('./data')

const todoProductos = (req, res) => {
  res.send(data)
}

const productoId = (req, res) => {
  const id = req.params.id
  const response = data.filter(item => item.id === id)
  res.send(response)
}

const agregarProducto = (req, res) => {
  const producto = req.body
  data.push(producto)

  res.send(producto)
}

const elminarProducto = (req, res) => {
  const id = req.params.id
  data = data.filter(item => item.id !== id)

  res.send(data)
}

const actualizarProducto = (req, res) => {
  const { id, name } = req.body

  data = data.filter(item => item.id !== id)
  data.push({ id, name })

  res.send(data)
}

module.exports = {
  todoProductos,
  productoId,
  agregarProducto,
  elminarProducto,
  actualizarProducto
}
