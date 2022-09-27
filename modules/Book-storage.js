const empty = document.querySelector('.empty');

export default class Storage {
  static BooksFromStorage() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static BooksToStorage(book) {
    const books = Storage.BooksFromStorage();

    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeFromStorage(author) {
    const books = Storage.BooksFromStorage();

    books.forEach((book, i) => {
      if (book.author === author) {
        books.splice(i, 1);
      }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }

  static checkEmptyList() {
    const books = Storage.BooksFromStorage();
    if (books.length === 0) {
      empty.classList.remove('hide');
    } else {
      empty.classList.add('hide');
    }
  }
}
