const express = require('express')
const { getAllProducts, getProductById, createProduct } = require('./src/products')

const app = express()
app.use(express.json())

// take a request and response for a single endpoint...
app.get('/products/:id', getProductById)
app.get('/products', getAllProducts)
app.post('/products', createProduct)

app.listen(3000, () => {
  console.log('Listening on http://localhost:3000/')
})