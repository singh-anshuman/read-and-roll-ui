import { getBooks } from '../../../services/BookService';
import {FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_FAILURE} from './bookActionTypes';

function loadBooksRequest() {
    return {
        type: FETCH_BOOKS_REQUEST
    }
}

function loadBooksSuccess(data) {
    return {
        type: FETCH_BOOKS_SUCCESS,
        data
    }
}

function loadBooksFailure(error) {
    return {
        type: FETCH_BOOKS_FAILURE,
        error
    }
}

export function fetchBooks() {
    return (dispatch) => {
        dispatch(loadBooksRequest());
        return getBooks().then(data => {
            dispatch(loadBooksSuccess(data));
        }).catch(error => {
            dispatch(loadBooksFailure(error));
        });
    }
}