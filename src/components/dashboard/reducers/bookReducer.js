import { addBook, getBooks } from "../../../services/BookService";

export default function bookReducer(state = getBooks(), action) {
    switch (action.type) {
        case "ADD_BOOK":
            addBook(action.book);
            return getBooks();
        case "SEARCH_BOOKS":
            return getBooks(action.searchString);
        default:
            return state;
    }
}
