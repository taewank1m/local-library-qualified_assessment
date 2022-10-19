function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let booksBorrowed = books.forEach((book) => book.borrows.map((borrow)=>borrow.returned ===false));
  return booksBorrowed.length
}
function getMostCommonGenres(books) {
  let genreList = {};
  books.forEach((book) => {
    if(genreList[book.genre]){
      genreList[book.genre]++
    }
    else
    genreList[book.genre] = 1;
  });
  console.log(genreList);
  let commonGenreList = [];
  for(let genre in genreList) {
    let number = genreList[genre];
    commonGenreList.push({name:genre, count:number})
  }
  return commonGenreList.sort((genreA, genreB) =>
  genreA.count < genreB.count ? 1 : -1
).slice(0,5);
}

function getMostPopularBooks(books) {
  let borrowTotal = books.reduce((result, book)=>{
    result[book.title] = book.borrows.length;
    return result;
  }, {})
  let popularList = [];
  for (let popular in borrowTotal){
    let number = borrowTotal[popular];
    popularList.push({name:popular, count:number})
  }
  return popularList.sort((genreA, genreB) =>
 genreA.count < genreB.count ? 1 : -1
).slice(0,5);
}

function getMostPopularAuthors(books, authors) {
  let authorBooks = books.reduce((result, book) => {
    if(book.authorId)
  }, {})
  }

  function getMostPopularAuthors(books, authors) {
    let result = [];
    authors.forEach((author) => {
     let theAuthor = {
      name: `${author.name.first} ${author.name.last}`,
      count: 0
     };
     books.forEach((book) => {
      if (book.authorId === author.id) {
       theAuthor.count += book.borrows.length;
      }
     });
     result.push(theAuthor);
    });
    return result.sort((a, b) => b.count - a.count).slice(0, 5);
   }
   
module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
