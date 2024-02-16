const myLibrary = [];

function Book(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read ? read : false;
}

Book.prototype.toggleRead = () => {
    this.read = this.read ? false : true;
    displayLibrary();
    console.log(this.read);
}

// Book.prototype.displayBook = () => {
//     this.bookContainer = document.createElement('div');
//     this.bookContainer.classList.add('book-container');

//     this.displayTitle = document.createElement('div');
//     this.displayTitle.textContent = `Title: ${this.title}`;

//     this.displayAuthor = document.createElement('div');
//     this.displayAuthor.textContent = `Author: ${this.author}`;

//     this.displayRead = document.createElement('div');
//     this.displayRead.textContent = `Read: ${this.read ? "Read" : "Not read"}`;

//     this.toggleRead = document.createElement('button');
//     this.toggleRead.textContent = "Toggle Read";
//     this.toggleRead.addEventListener('click', (e) => {
//         e.preventDefault();
//         this.toggleRead();
//     });

//     this.displayRead.appendChild(this.toggleRead);

//     this.remove = document.createElement('button');
//     this.remove.type = 'button';
//     this.remove.textContent = 'Remove';

//     this.remove.addEventListener('click', (e) => {
//         e.preventDefault();
//         this.bookContainer.remove();
//     });

//     this.bookContainer.appendChild(this.displayTitle);
//     this.bookContainer.appendChild(this.displayAuthor);
//     this.bookContainer.appendChild(this.displayRead);
//     this.bookContainer.appendChild(this.remove);

//     library.appendChild(this.bookContainer);

// }
// Book.prototype.displayBook = () => {
//     const bookContainer = document.createElement('div');
//     bookContainer.classList.add("book-container");

//     const title = document.createElement('div');
//     title.textContent = `Title: ${this.title}`;

//     const author = document.createElement('div');
//     author.textContent = `Author: ${this.author}`;

//     const read = document.createElement('div');
//     read.textContent = `Read: ${this.read ? "Read" : "Not read"}`;

//     const remove = document.createElement('button');
//     remove.type = 'button';
//     remove.textContent = 'Remove';

//     remove.addEventListener('click', (e) => {
//         e.preventDefault();
//         bookContainer.remove();
//     });

//     bookContainer.appendChild(title);
//     bookContainer.appendChild(author);
//     bookContainer.appendChild(read);
//     bookContainer.appendChild(remove);

//     library.appendChild(bookContainer);
// }

function addBookToLibrary(book) {
    myLibrary.push(book);

    // const bookContainer = document.createElement('div');
    // bookContainer.classList.add("book-container");

    // const title = document.createElement('div');
    // title.textContent = `Title: ${book.title}`;

    // const author = document.createElement('div');
    // author.textContent = `Author: ${book.author}`;

    // const read = document.createElement('div');
    // read.textContent = `Read: ${book.read ? "Read" : "Not read"}`;

    // const remove = document.createElement('button');
    // remove.type = 'button';
    // remove.textContent = 'Remove';

    // remove.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     bookContainer.remove();
    // });

    // bookContainer.appendChild(title);
    // bookContainer.appendChild(author);
    // bookContainer.appendChild(read);
    // bookContainer.appendChild(remove);

    // library.appendChild(bookContainer);
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
}

const newBookButton = document.querySelector('.new-book');
const dialog = document.querySelector('dialog');
const library = document.querySelector(".library");
const script = document.querySelector("#script");
const submit = document.querySelector("#submit");


newBookButton.addEventListener('click', (e) => {
    e.preventDefault();

    dialog.open = dialog.open ? false : true;
});

submit.addEventListener('click', (e) => {
    e.preventDefault();

    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const readCheckbox = document.querySelector("#read");

    const newBook = new Book(title.value, author.value, readCheckbox.checked);
    addBookToLibrary(newBook);
    displayLibrary();
});

