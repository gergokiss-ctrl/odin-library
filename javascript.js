const title = document.querySelector('.title');
const author = document.querySelector('.author');
const pages = document.querySelector('.pages');
const read = document.querySelector('.read');
const submit = document.querySelector('.submit');
const container = document.querySelector('.container');

const myLibrary = [];
let counter = 0;

// eslint-disable-next-line no-unused-vars
function openForm() {
  document.getElementById('myForm').style.display = 'block';
}

// eslint-disable-next-line no-shadow
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  submit.addEventListener('click', (event) => {
    if (title.value !== '' && author.value !== '' && pages.value !== '') {
      myLibrary[counter] = new Book(title.value, author.value, pages.value, read.checked);
      counter += 1;

      const content = document.createElement('div');
      content.classList.add('content');

      const titleText = document.createElement('div');
      const authorText = document.createElement('div');
      const pagesText = document.createElement('div');
      const readText = document.createElement('div');

      titleText.textContent = `"${title.value}"`;
      authorText.textContent = author.value;
      pagesText.textContent = pages.value;

      if (read.checked === true) {
        readText.textContent = 'Read';
      } else {
        readText.textContent = 'Not read';
      }

      content.appendChild(titleText);
      content.appendChild(authorText);
      content.appendChild(pagesText);
      content.appendChild(readText);

      container.appendChild(content);

      event.preventDefault();
    }
  });
}

addBookToLibrary();
