import { getBooks } from "../../../services/BookService";
import { FETCH_BOOKS_FAILURE, FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS } from '../actions/bookActionTypes';
import { SEARCH_BOOKS } from '../actions/SearchBooksAction';

const initialState = {
    loading: true
}

export default function bookReducer(state = initialState, action) {
    switch (action.type) {
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
