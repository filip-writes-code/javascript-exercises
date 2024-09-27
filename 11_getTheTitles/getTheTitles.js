const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
]

const getTheTitles = function(booksArr) {
    return booksArr.map(item => item.title);
};

getTheTitles(books);
// Do not edit below this line
module.exports = getTheTitles;
