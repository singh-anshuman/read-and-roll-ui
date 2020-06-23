import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import referenceDataReducer from "./components/common/reducers/referenceDataReducer";
import bookReducer from "./components/dashboard/reducers/bookReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    combineReducers({
        books: bookReducer,
        referenceData: referenceDataReducer,
    }),composeEnhancers(applyMiddleware(thunk,reduxImmutableStateInvariant()))
);