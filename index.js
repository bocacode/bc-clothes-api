const express = require('express')
const { getAllProducts } = require('./src/products')

const app = express()

// take a request and response for a single endpoint...
app.get('/products', getAllProducts)

app.listen(3000, () => {
  console.log('Listening on http://localhost:3000/')
})