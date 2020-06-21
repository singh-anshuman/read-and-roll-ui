import {TOGGLE_ADD_BOOK_DIALOG} from '../../dashboard/actions/ToggleAddBookDialog';

export default function referenceDataReducer(
    state = { showAddBookDialog: false },
    action
) {
    switch (action.type) {
        case TOGGLE_ADD_BOOK_DIALOG:
            return Object.assign({}, state, {
                showAddBookDialog: !state.showAddBookDialog,
            });
        default:
            return state;
    }
}
