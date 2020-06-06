export default function referenceDataReducer(state = [], action) {
    switch (action.type) {
        case "TOGGLE_ADD_BOOK_DIALOG":
            return Object.assign({}, state, {
                showAddBookDialog: !state.showAddBookDialog,
            });
        default:
            return state;
    }
}
