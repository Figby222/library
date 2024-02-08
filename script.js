const myLibrary = [];

function Book(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read ? read : false;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayLibrary() {
    console.table(myLibrary);
}

const myBook = new Book("HARRY POTTER", "asiflohfiloda");
const myBook2 = new Book("sialudhoiufhas", "author");
addBookToLibrary(myBook);
addBookToLibrary(myBook2);
displayLibrary();