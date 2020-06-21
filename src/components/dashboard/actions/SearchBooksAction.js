export const SEARCH_BOOKS = "SEARCH_BOOKS";

export function searchBooksAction(searchString) {
    return {
        type: SEARCH_BOOKS,
        searchString: searchString,
    };
}
