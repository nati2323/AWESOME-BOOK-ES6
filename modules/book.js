class Book {
  #title = '';

  #author = '';

  #id = '';

  constructor(id, title, author) {
    this.#title = title;
    this.#author = author;
    this.#id = id;
  }

  get title() {
    return this.#title;
  }

  get author() {
    return this.#author;
  }

  get id() {
    return this.#id;
  }

  toString() {
    return { title: this.#title, author: this.#author, id: this.#id };
  }
}

export default Book;
