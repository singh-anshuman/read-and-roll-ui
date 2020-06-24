import axios from 'axios';

const booksUrl = 'http://localhost:8081/books?searchStr=';

export function getBooks(searchStr) {
    let url = searchStr!==undefined ? booksUrl+searchStr : booksUrl;
    return axios.get(url);
}

export function addBook(book) {
    return axios.post(booksUrl,book);
}