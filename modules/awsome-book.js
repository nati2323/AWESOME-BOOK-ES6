import Book from './book.js';

class AwesomeBooks {
  #store = [];

  constructor() {
    const books = localStorage.getItem('awesome_books');
    if (!books) return;
    const book = JSON.parse(books);
    this.#loadBooks(book);
  }

  shelf() {
    return this.#store;
  }

  addBook(title, author) {
    const id = Math.random().toString(36).slice(2);
    const book = new Book(id, title, author);
    this.#store.push(book);
    this.#update();
  }

  removeBook(id) {
    const books = this.#store.filter((book) => book.id !== id);
    this.#store = books;
    this.#update();
  }

  #loadBooks(books) {
    this.#store = books.map((e) => {
      const book = new Book(e.id, e.title, e.author);
      return book;
    });
  }

  #update() {
    const store = this.#toString();
    localStorage.setItem('awesome_books', store);
  }

  #toString() {
    const store = this.#store.map((book) => book.toString());
    return JSON.stringify(store);
  }
}

export default AwesomeBooks;
