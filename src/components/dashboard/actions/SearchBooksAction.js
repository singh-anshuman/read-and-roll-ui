export function searchBooksAction(searchString) {
    return {
        type: "SEARCH_BOOKS",
        searchString: searchString,
    };
}
