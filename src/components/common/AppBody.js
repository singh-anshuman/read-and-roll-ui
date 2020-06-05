import React from "react";
import BookList from "../dashboard/BookList";
import SearchBar from "../dashboard/SearchBar";
import "./css/AppBody.css";

export default class AppBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: "",
        };
        this.reloadBookList = this.reloadBookList.bind(this);
    }

    reloadBookList() {
        this.setState({
            searchString: "",
        });
    }

    render() {
        return (
            <div className="app-body">
                <SearchBar reloadBookList={this.reloadBookList} />
                <BookList />
            </div>
        );
    }
}
