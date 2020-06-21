import { addBook, getBooks } from "../../../services/BookService";
import {ADD_BOOK} from '../actions/AddBookAction';
import {SEARCH_BOOKS} from '../actions/SearchBooksAction';

export default function bookReducer(state = getBooks(), action) {
    switch (action.type) {
        case ADD_BOOK:
            addBook(action.book);
            return getBooks();
        case SEARCH_BOOKS:
            return getBooks(action.searchString);
        default:
            return state;
    }
}
