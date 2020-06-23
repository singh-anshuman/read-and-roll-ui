import * as BookService from '../../../services/BookService';
import * as bookActionTypes from './bookActionTypes';

function loadBooksRequest() {
    return {
        type: bookActionTypes.FETCH_BOOKS_REQUEST
    }
}

function loadBooksSuccess(data) {
    return {
        type: bookActionTypes.FETCH_BOOKS_SUCCESS,
        data
    }
}

function loadBooksFailure(error) {
    return {
        type: bookActionTypes.FETCH_BOOKS_FAILURE,
        error
    }
}

function addBookFailure(error) {
    return {
        type: bookActionTypes.ADD_BOOK_FAILURE,
        error
    }
}

export function addBook(book) {
    return dispatch => {
        return BookService.addBook(book).then(response=> {
            dispatch(fetchBooks());
        }).catch(error => {
            dispatch(addBookFailure(error));
        });
    }
}

export function fetchBooks() {
    return (dispatch) => {
        dispatch(loadBooksRequest());
        return BookService.getBooks().then(response => {
            dispatch(loadBooksSuccess(response.data));
        }).catch(error => {
            dispatch(loadBooksFailure(error));
        });
    }
}

export function toggleAddBookDialog() {
    return {
        type: bookActionTypes.TOGGLE_ADD_BOOK_DIALOG,
    };
}