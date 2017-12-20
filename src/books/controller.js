const booksData = require('./data')

const getByFilter = (books, field, value) =>
  books[0][field] ?
    books.filter(book => book[field] === value) :
    books

const getAll = (queries) =>
  Object.keys(queries).reduce((books, key) =>
    getByFilter(books, key, queries[key]),
    booksData
  )

const getById = (id) =>
  booksData.find(book => book.id.toString() === id)

const create = (book) => {
  book.id = booksData.length
  book.read = false

  booksData.push(book)

  return book
}

module.exports = { getAll, getById, create }
