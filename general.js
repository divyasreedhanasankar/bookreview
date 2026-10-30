const axios = require('axios');

// 1. Get all books
async function getAllBooks() {
    try {
        const res = await axios.get('http://localhost:5000/');
        console.log(res.data);
    } catch (err) {
        console.log(err.message);
    }
}

// 2. Get book by ISBN
async function getBookByISBN(isbn) {
    try {
        const res = await axios.get(
            `http://localhost:5000/isbn/${isbn}`
        );
        console.log(res.data);
    } catch (err) {
        console.log(err.message);
    }
}

// 3. Get books by author
async function getBooksByAuthor(author) {
    try {
        const res = await axios.get(
            `http://localhost:5000/author/${encodeURIComponent(author)}`
        );
        console.log(res.data);
    } catch (err) {
        console.log(err.message);
    }
}

// 4. Get books by title
async function getBooksByTitle(title) {
    try {
        const res = await axios.get(
            `http://localhost:5000/title/${encodeURIComponent(title)}`
        );
        console.log(res.data);
    } catch (err) {
        console.log(err.message);
    }
}

// Function calls
getAllBooks();
getBookByISBN('1');
getBooksByAuthor('Chinua Achebe');
getBooksByTitle('Things Fall Apart');

module.exports = {
    getAllBooks,
    getBookByISBN,
    getBooksByAuthor,
    getBooksByTitle
};
