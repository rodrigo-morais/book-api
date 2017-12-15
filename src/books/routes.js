const express = require('express')
const router = express.Router()

const books = require('./controller')

router
  .get('/', (req, res) => res.send(books.getAll()))


module.exports = router
