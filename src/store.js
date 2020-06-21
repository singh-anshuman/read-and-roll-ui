import { combineReducers, compose, createStore, applyMiddleware } from "redux";
import referenceDataReducer from "./components/common/reducers/referenceDataReducer";
import bookReducer from "./components/dashboard/reducers/bookReducer";
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    combineReducers({
        books: bookReducer,
        referenceData: referenceDataReducer,
    },composeEnhancers(applyMiddleware(reduxImmutableStateInvariant,thunk)))
);
