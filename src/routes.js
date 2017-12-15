const express = require('express')
const router = express.Router({ mergeParams: true })

const books = require('./books/routes')

router.use('/books', books)

module.exports = router
