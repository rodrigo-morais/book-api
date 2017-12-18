const booksData = require('./data')

const getByGenre = (books, genre) =>
  books.filter(book => book.genre === genre)

const getByAuthor = (books, author) =>
  books.filter(book => book.author === author)

const getAll = (genre, author) => {
  const books =  genre ?
    getByGenre(booksData, genre) :
    booksData

  return author ?
    getByAuthor(books, author) :
    books
}

const getById = (id) => {
  console.log('ID', id)
  return booksData.find(book => book.id.toString() === id)
}



module.exports = { getAll, getById }
