import { DateTime } from './modules/luxon.js';
import AwesomeBooks from './modules/awsome-book.js';

const awesome = new AwesomeBooks();

const form = document.getElementById('form');
const books = document.getElementById('books');
const shelf = document.getElementById('shelf');
const date = document.getElementById('date');
const addBook = document.getElementById('addBook');
const contactBtn = document.getElementById('contactBtn');
const listBook = document.getElementById('listBook');

const bookShelf = document.getElementById('bookShelf');
const contact = document.getElementById('contact');
const add = document.getElementById('add');

const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
date.innerText = now;

const renderBooks = () => {
  shelf.innerHTML = '';
  books.innerHTML = '';

  if (awesome.shelf().length === 0) {
    const no = document.createElement('p');
    no.classList.add('empty');
    no.innerHTML = 'Empty Shelf<br >Please add you books';
    shelf.appendChild(no);
  }

  awesome.shelf().forEach((e, i) => {
    const bookCard = document.createElement('li');

    if (i % 2 === 1) bookCard.classList.add('draf');

    const details = document.createElement('p');
    details.innerText = `"${e.title}" by ${e.author}`;

    bookCard.appendChild(details);

    const remove = document.createElement('button');
    remove.type = 'button';
    remove.innerText = 'Remove';
    remove.onclick = () => {
      awesome.removeBook(e.id);
      renderBooks();
    };
    bookCard.appendChild(remove);

    books.appendChild(bookCard);

    form.reset();
  });

  shelf.appendChild(books);
};

renderBooks();

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const book = Object.fromEntries(new FormData(e.target).entries());
  awesome.addBook(book.title, book.author);

  add.style.display = 'none';
  bookShelf.style.display = 'block';
  contact.style.display = 'none';

  renderBooks();
});

addBook.addEventListener('click', () => {
  add.style.display = 'block';
  addBook.style.color = 'blue';
  listBook.style.color = 'black';
  contactBtn.style.color = 'black';
  bookShelf.style.display = 'none';
  contact.style.display = 'none';
});

listBook.addEventListener('click', () => {
  add.style.display = 'none';
  addBook.style.color = 'black';
  listBook.style.color = 'blue';
  contactBtn.style.color = 'black';
  bookShelf.style.display = 'block';
  contact.style.display = 'none';
});

contactBtn.addEventListener('click', () => {
  add.style.display = 'none';
  addBook.style.color = 'black';
  listBook.style.color = 'black';
  contactBtn.style.color = 'blue';
  bookShelf.style.display = 'none';
  contact.style.display = 'block';
});
