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



module.exports = { getAll }
