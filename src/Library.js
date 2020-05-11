function createLibrary(libraryName){
  var denverLibrary = {
    name: libraryName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    }
  }
return denverLibrary
}

function addBook(libraryName, bookName){
  libraryName.shelves[bookName.genre].push(bookName)
}

function checkoutBook(libraryName, bookName){
  console.log(libraryName.shelves[0].title);
  console.log(bookName);
  // console.log(libraryName.shelves[1].title);
  // console.log(bookName.title);
  for ( var i = 0; i < libraryName.shelves.length; i++){
    if(libraryName.shelves[i].title === bookName){
      libraryName.shelves[i].title.splice(0,1)
    }
  }

  return `You have now checked out ${bookName} from the ${libraryName}`
}

module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};
