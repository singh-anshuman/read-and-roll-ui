import { createStore } from "redux";
import bookReducer from "./components/dashboard/reducers/bookReducer";

export const store = createStore(bookReducer);
