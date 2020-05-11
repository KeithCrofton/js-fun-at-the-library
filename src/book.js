function createTitle(bookTitle) {
  return `The ${bookTitle}`;
}
function buildMainCharacter(name, age, pronouns){
  return {name: name, age: age, pronouns: pronouns};
}

function saveReview(bookReview, reviews){
  if(reviews.length === 0){
    reviews.push(bookReview)
  } else if (bookReview.length !== reviews[0].length){
    reviews.push(bookReview)
  }
}

function calculatePageCount(bookTitle){
  return bookTitle.length * 20
}

function writeBook(bookTitle, bookCharacter, bookGenre){
  var book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: bookGenre,
  }
  return(book)
}
function editBook(book){
  book.pageCount = book.pageCount * .75
}

module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook
}
