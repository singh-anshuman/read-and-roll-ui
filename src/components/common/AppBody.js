import React from "react";
import BookList from "../dashboard/BookList";
import SearchBar from "../dashboard/SearchBar";
import "./css/AppBody.css";

export default class AppBody extends React.Component {
    render() {
        return (
            <div className="app-body">
                <SearchBar />
                <BookList />
            </div>
        );
    }
}
