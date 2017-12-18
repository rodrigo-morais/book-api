const express = require('express')
const router = express.Router()

const books = require('./controller')

router
  .get('/', (req, res) => res.send(books.getAll(req.query.genre, req.query.author)))
  .get('/:id', (req, res) => res.send(books.getById(req.params.id)))

module.exports = router
