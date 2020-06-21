const ADD_BOOK = 'ADD_BOOK';

export function addBookAction(book) {
    return {
        type: ADD_BOOK,
        book: book,
    };
}
