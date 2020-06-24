import * as bookActionTypes from '../../dashboard/actions/bookActionTypes';

const initialState = {
    showAddBookDialog: false,
    bookListLayout: 'card'
}

export default function referenceDataReducer(state = initialState,action) {
    switch (action.type) {
        case bookActionTypes.TOGGLE_ADD_BOOK_DIALOG:
            return Object.assign({},state,{showAddBookDialog: !state.showAddBookDialog});
        case bookActionTypes.SELECT_BOOK_LIST_LAYOUT:
            return Object.assign({},state,{bookListLayout: action.layout});
        default:
            return state;
    }
}
