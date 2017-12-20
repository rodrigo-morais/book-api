const express = require('express')
const router = express.Router()

const books = require('./controller')

router
  .get('/', (req, res) =>
    res.send(books.getAll(req.query))
  )
  .get('/:id', (req, res) =>
    res.send(books.getById(req.params.id))
  )
  .post('/', (req, res) =>
    res.send(books.create(req.body))
  )

module.exports = router
