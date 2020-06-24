import * as bookActionTypes from '../actions/bookActionTypes';

const initialState = {
    loading: true
}

export default function bookReducer(state = initialState, action) {
    switch (action.type) {
        case bookActionTypes.FETCH_BOOKS_REQUEST:
            return { loading: true};
        case bookActionTypes.FETCH_BOOKS_SUCCESS:
            return { loading: false, data: action.data};
        case bookActionTypes.FETCH_BOOKS_FAILURE:
            return { loading: false, error: action.error};
        default:
            return state;
    }
}
