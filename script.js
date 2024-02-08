const myLibrary = [];

function Book(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read ? read : false;
}

function addBookToLibrary(book) {
    myLibrary.push(book);

    const bookContainer = document.createElement('div');
    bookContainer.classList.add("book-container");

    const title = document.createElement('div');
    title.textContent = `Title: ${book.title}`;

    const author = document.createElement('div');
    author.textContent = `Author: ${book.author}`;

    const read = document.createElement('div');
    read.textContent = `Read: ${book.read ? "Read" : "Not read"}`;

    const remove = document.createElement('button');
    remove.type = 'button';
    remove.textContent = 'Remove';

    remove.addEventListener('click', (e) => {
        e.preventDefault();
        bookContainer.remove();
    });

    bookContainer.appendChild(title);
    bookContainer.appendChild(author);
    bookContainer.appendChild(read);
    bookContainer.appendChild(remove);

    library.appendChild(bookContainer);
}

function displayLibrary() {
    library.textContent = '';
    myLibrary.forEach((book) => {
        const bookContainer = document.createElement('div');
        bookContainer.classList.add("book-container");

        const title = document.createElement('div');
        title.textContent = `Title: ${book.title}`;

        const author = document.createElement('div');
        author.textContent = `Author: ${book.author}`;

        const read = document.createElement('div');
        read.textContent = `Read: ${book.read ? "Read" : "Not read"}`;

        const remove = document.createElement('button');
        remove.type = 'button';
        remove.textContent = 'Remove';

        remove.addEventListener('click', (e) => {
            e.preventDefault();
            bookContainer.remove();
        });

        bookContainer.appendChild(title);
        bookContainer.appendChild(author);
        bookContainer.appendChild(read);
        bookContainer.appendChild(remove);

        library.appendChild(bookContainer);
    });
}

const newBook = document.querySelector('.new-book');
const dialog = document.querySelector('dialog');
const library = document.querySelector(".library");
const script = document.querySelector("#script");
const submit = document.querySelector("#submit");

newBook.addEventListener('click', (e) => {
    e.preventDefault();

    dialog.open = dialog.open ? false : true;
})
submit.addEventListener('click', (e) => {
    e.preventDefault();

    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const readCheckbox = document.querySelector("#read");

    const newBook = new Book(title.value, author.value, readCheckbox.checked);
    addBookToLibrary(newBook);
    // displayLibrary();
});

