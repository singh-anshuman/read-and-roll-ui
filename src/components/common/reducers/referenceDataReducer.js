import * as bookActionTypes from '../../dashboard/actions/bookActionTypes';

export default function referenceDataReducer(
    state = { showAddBookDialog: false },
    action
) {
    switch (action.type) {
        case bookActionTypes.TOGGLE_ADD_BOOK_DIALOG:
            return Object.assign({}, state, {
                showAddBookDialog: !state.showAddBookDialog,
            });
        default:
            return state;
    }
}
