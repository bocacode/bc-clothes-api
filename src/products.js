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


// create a new product


// update a single product


// delete a single product