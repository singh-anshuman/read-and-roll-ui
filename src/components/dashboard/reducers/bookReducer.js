import { masterBookList } from "../../../services/BookService";
import { getBooks } from "../../../services/BookService";

export default function bookReducer(state = masterBookList, action) {
    switch (action.type) {
        case "ADD_BOOK":
            return state.unshift(action.book);
        case "SEARCH_BOOKS":
            return getBooks(action.searchString);
        default:
            return state;
    }
}
