// connect to the database
const { connectDb } = require('./db')

// get all products
exports.getAllProducts = (req, res) => {
  const db = connectDb()
  db.collection('clothes').get()
    .then(collection => {
      const products = collection.docs.map(doc => {
        let product = doc.data()
        product.id = doc.id
        return product
      })
      res.send(products)
    })
    .catch(err => res.status(500).send(err))
}

// get a single product
exports.getProductById = (req, res) => {
  const db = connectDb()
  const { id } = req.params
  db.collection('clothes').doc(id).get()
    .then(doc => {
      let product = doc.data()
      product.id = doc.id
      res.send(product)
    })
    .catch(err => res.status(500).send(err))
}

// create a new product
exports.createProduct = (req, res) => {
  const db = connectDb()
  let newProduct = req.body
  db.collection('clothes').add(newProduct)
    .then(docRef => {
      newProduct.id = docRef.id
      res.send(newProduct)
    })
    .catch(err => res.status(500).send(err))
}

// update a single product


// delete a single product