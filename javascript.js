const title = document.querySelector('.title');
const author = document.querySelector('.author');
const pages = document.querySelector('.pages');
const read = document.querySelector('.read');
const submit = document.querySelector('.submit');
const container = document.querySelector('.container');

let myLibrary = [];
let counter = 0;

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

function deleteContent() {
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }
}

function createContent(event) {
  for (let i = 0; i < counter; i += 1) {
    const content = document.createElement('div');
    content.classList.add('content');

    const titleText = document.createElement('div');
    const authorText = document.createElement('div');
    const pagesText = document.createElement('div');
    const readText = document.createElement('button');
    const deleteText = document.createElement('button');

    if (myLibrary[i].read === true) {
      readText.textContent = 'Read';
    } else {
      readText.textContent = 'Not read';
    }

    readText.setAttribute('class', 'read-button');
    readText.setAttribute('onclick', 'readBook(event)');
    readText.setAttribute('data-index', i);

    deleteText.textContent = 'Remove';
    deleteText.setAttribute('class', 'delete-button');
    deleteText.setAttribute('onclick', 'deleteBook(event)');
    deleteText.setAttribute('data-index', i);

    titleText.textContent = myLibrary[i].title;
    authorText.textContent = myLibrary[i].author;
    pagesText.textContent = myLibrary[i].pages;

    content.appendChild(titleText);
    content.appendChild(authorText);
    content.appendChild(pagesText);
    content.appendChild(readText);
    content.appendChild(deleteText);

    container.appendChild(content);

    event.preventDefault();
  }
}

function addBookToLibrary() {
  submit.addEventListener('click', (event) => {
    if (title.value !== '' && author.value !== '' && pages.value !== '') {
      myLibrary[counter] = new Book(title.value, author.value, pages.value, read.checked);
      counter += 1;

      deleteContent();

      createContent(event);
    }
  });
}

function readBook(event) {
  if (myLibrary[event.target.dataset.index].read === true) {
    myLibrary[event.target.dataset.index].read = false;
    event.target.textContent = 'Not read';
  } else {
    myLibrary[event.target.dataset.index].read = true;
    event.target.textContent = 'Read';
  }
}

function deleteBook(event) {
  myLibrary.splice(event.target.dataset.index, 1);
  counter -= 1;

  deleteContent();
  createContent(event);
}

addBookToLibrary();
