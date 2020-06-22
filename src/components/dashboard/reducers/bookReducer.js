import { addBook, getBooks } from "../../../services/BookService";
import {ADD_BOOK} from '../actions/AddBookAction';
import {SEARCH_BOOKS} from '../actions/SearchBooksAction';
import { FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_FAILURE } from '../actions/bookActionTypes';


export default function bookReducer(state = [], action) {
    switch (action.type) {
        case ADD_BOOK:
            addBook(action.book);
            return getBooks();
        case FETCH_BOOKS_REQUEST:
            return { loading: true};
        case FETCH_BOOKS_SUCCESS:
            return { loading: false, data: action.data};
        case FETCH_BOOKS_FAILURE:
            return { loading: false, error: action.error};
        case SEARCH_BOOKS:
            return getBooks(action.searchString);
        default:
            return state;
    }
}
