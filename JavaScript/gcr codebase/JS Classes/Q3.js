class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = false;
    }

    issueBook() {
        if (!this.isIssued) {
            this.isIssued = true;
            console.log(this.title + " issued successfully.");
        } else {
            console.log(this.title + " is already issued.");
        }
    }

    returnBook() {
        if (this.isIssued) {
            this.isIssued = false;
            console.log(this.title + " returned successfully.");
        } else {
            console.log(this.title + " was not issued.");
        }
    }
}

const books = [
    new Book("JavaScript Basics", "John", "101"),
    new Book("Python Programming", "David", "102"),
    new Book("Data Structures", "Robert", "103"),
    new Book("Web Development", "James", "104")
];

function displayAvailableBooks() {
    const availableBooks = books.filter(book => !book.isIssued);

    console.log("Available Books:");

    availableBooks.forEach(book => {
        console.log(
            "Title: " + book.title +
            ", Author: " + book.author +
            ", ISBN: " + book.ISBN
        );
    });
}

function issueBookByISBN(ISBN) {
    const book = books.find(book => book.ISBN === ISBN);

    if (book) {
        book.issueBook();
    } else {
        console.log("Book not found.");
    }
}

displayAvailableBooks();

issueBookByISBN("102");

displayAvailableBooks();

const returnedBook = books.find(book => book.ISBN === "102");

if (returnedBook) {
    returnedBook.returnBook();
}

displayAvailableBooks();