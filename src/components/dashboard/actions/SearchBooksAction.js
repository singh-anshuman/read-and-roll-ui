import {getBooks} from '../../../services/BookService'; 

export const SEARCH_BOOKS = "SEARCH_BOOKS";
export const FETCH_BOOKS_REQUEST = "FETCH_BOOKS_REQUEST";
export const FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS";
export const FETCH_BOOKS_FAILURE = "FETCH_BOOKS_FAILURE";


export function searchBooksAction(searchString) {
    return {
        type: SEARCH_BOOKS,
        searchString: searchString,
    };
}

function getBooksAction(data) {
    return { type: FETCH_BOOKS_SUCCESS,data };
}

export function getBook() {
    return dispatch => {
        getBooks.then(data => {
            dispatch(getBooksAction(data));
        });
    }
}