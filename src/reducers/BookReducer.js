import {masterBookList} from './../services/BookService';

export default function BookReducer(state=masterBookList, action) {
    switch(action.type) {
        case 'ADD_BOOK':
            return state.unshift(action.book);
        default:
            return state;
    }
}