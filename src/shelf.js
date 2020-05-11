function shelfBook(bookName, bookShelf){
  if(bookShelf.length < 3){
  bookShelf.unshift(bookName)
}
};

function unshelfBook(bookName, bookShelf){
  for (var i = 0; i < bookShelf.length; i++){
    if(bookShelf[i].title === bookName){
      bookShelf.splice(i, 1);
    }
}
}
function listTitles(fantasyShelf){
  var bookTitles = []
  for (var i = 0; i < fantasyShelf.length; i++){
    bookTitles.push(fantasyShelf[i].title)
  }
  return bookTitles.join(", ");
}

function searchShelf(bookShelf, bookName){
  for (var i = 0; i < bookShelf.length; i++){
    if(bookShelf[i].title === bookName){
      return true}
    }
  return false 
}


module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};
