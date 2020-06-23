import axios from 'axios';

const booksUrl = 'http://localhost:8081/books';

export function getBooks() {
    return axios.get(booksUrl);
}

export function addBook(book) {
    return axios.post(booksUrl,book);
}

// export function getBooks(searchString = "") {
//     return masterBookList.filter((book) =>
//         book.title.toUpperCase().includes(searchString.toUpperCase())
//     );
// }
