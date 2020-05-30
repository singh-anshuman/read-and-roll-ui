import { createStore } from "redux";
import bookReducer from "./components/dashboard/reducers/bookReducer";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(bookReducer, composeWithDevTools());
