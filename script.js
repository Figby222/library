const myLibrary = [];
const form = document.querySelector('.new-book-form');


function Book(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read ? read : false;
}

Book.prototype.toggleRead = function () {
    this.read = this.read ? false : true;
    displayLibrary();
    // console.log(this == myLibrary[0]); // true
}



function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayLibrary() {
    library.textContent = '';
    myLibrary.forEach((book, index) => {
        book.index = index;
        const bookContainer = document.createElement('div');
        bookContainer.classList.add("book-container");

        const title = document.createElement('div');
        title.textContent = `Title: ${book.title}`;

        const author = document.createElement('div');
        author.textContent = `Author: ${book.author}`;

        const read = document.createElement('div');
        read.textContent = `Read: ${book.read ? "Read" : "Not read"}`;

        const toggleRead = document.createElement('button');
        toggleRead.textContent = "Toggle Read";
        toggleRead.addEventListener('click', (e) => {
            e.preventDefault();
            book.toggleRead();
        });
        
        read.appendChild(toggleRead);

        const remove = document.createElement('button');
        remove.type = 'button';
        remove.textContent = 'Remove';

        remove.addEventListener('click', (e) => {
            e.preventDefault();
            myLibrary.splice(book.index, 1);
            bookContainer.remove();
        });

        bookContainer.appendChild(title);
        bookContainer.appendChild(author);
        bookContainer.appendChild(read);
        bookContainer.appendChild(remove);

        library.appendChild(bookContainer);
    });
    // console.log(myLibrary);
}

const newBookButton = document.querySelector('.new-book');
const dialog = document.querySelector('dialog');
const library = document.querySelector(".library");
const script = document.querySelector("#script");
const submit = document.querySelector("#submit");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const readCheckbox = document.querySelector("#read");


newBookButton.addEventListener('click', (e) => {
    e.preventDefault();
    
    dialog.open = dialog.open ? false : true;
});



form.addEventListener('submit', (e) => {
    // e.preventDefault();
});

title.addEventListener('input', (e) => {
    if (title.validity.tooShort) {
        title.setCustomValidity('Enter a longer title');
    } else {
        title.setCustomValidity('');
    }
});
submit.addEventListener('click', (e) => {
    // e.preventDefault();
    if (!form.validity.valid) {
        e.preventDefault();
    }
    
    if (form.validity.valid) {
        const newBook = new Book(title.value, author.value, readCheckbox.checked);
        addBookToLibrary(newBook);
        displayLibrary();
    }
});