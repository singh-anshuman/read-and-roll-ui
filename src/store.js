import { createStore } from 'redux'
import bookReducer from './reducers/bookReducer';


const store = createStore(bookReducer);