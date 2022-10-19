function findAccountById(accounts, id){
  return accounts.find((account)=>account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountsA, accountsB)=>
  accountsA.name.last.toLowerCase() > accountsB.name.last.toLowerCase()? 1:-1)
}


function getTotalNumberOfBorrows(account, books) {
  const { id: accId } = account;

  return books.reduce((accumulator, book) => {
    return (
      accumulator +
      book.borrows
        .filter(borrow => borrow.id === accId)
        .reduce((accumulatorBorrows, borrow) => accumulatorBorrows + 1, 0)
    );
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  let booksTaken = [];
  books.forEach(book=>{
    if (book.borrows.find(item=>item.id === account.id && !item.returned)) {
      booksTaken.push(book);
    }
  })
  booksTaken.forEach(book=>{
    let anAuthor = authors.find(person => person.id === book.authorId);
    book['author'] = anAuthor;
  })
  return booksTaken;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
