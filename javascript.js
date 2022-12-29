const title = document.querySelector('.title');
const author = document.querySelector('.author');
const pages = document.querySelector('.pages');
const read = document.querySelector('.read');
const submit = document.querySelector('.submit');

const myLibrary = [];
let counter = 0;

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  submit.addEventListener('click', () => {
    if (title.value !== '' && author.value !== '' && pages.value !== '') {
      myLibrary[counter] = new Book(title.value, author.value, pages.value, read.checked);
      counter += 1;
    }
  });
}

addBookToLibrary();
