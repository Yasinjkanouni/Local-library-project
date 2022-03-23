function findAuthorById(authors, id) {
  const findAuthor = authors.find((author) => author.id === id, {});
  return findAuthor;
}

function findBookById(books, id) {
  const findBook = books.find((book) => book.id === id, {});
  return findBook;
}
function partitionBooksByBorrowedStatus(books) {
let currentlyOut = books.filter((book) => book.borrows[0].returned === false);

let returned = books.filter((book) => book.borrows[0].returned !== false);
return [currentlyOut, returned];
}

function getBorrowersForBook(book, accounts) {

  let result = book.borrows.map(borrower => { 
   let result = accounts.find(account => borrower.id === account.id )
   result.returned = borrower.returned 

   return result
  })
  console.log(result)
  return result.filter((borrower, i)=> result.findIndex(item => item.id === borrower.id) === i) 

}
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
