import React from "react";
import Button from "react-bootstrap/Button";
import SearchBox from "./SearchBox";
import AddBook from "./AddBook";
import "./css/SearchBar.css";
import { addBook } from "../../services/BookService";

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showAddBook: false,
        };
        this.showAddBookDialog = this.showAddBookDialog.bind(this);
        this.hideAddBookDialog = this.hideAddBookDialog.bind(this);
        this.addBookData = this.addBookData.bind(this);
    }

    showAddBookDialog() {
        this.setState({
            showAddBook: true,
        });
    }

    hideAddBookDialog() {
        this.setState({
            showAddBook: false,
        });
    }

    addBookData(book) {
        addBook(book);
        this.hideAddBookDialog();
        this.props.reloadBookList();
    }

    render() {
        return (
            <div className="search-bar">
                <SearchBox searchBooks={this.props.searchBooks} />
                <Button variant="primary" onClick={this.showAddBookDialog}>
                    Add Book
                </Button>
                <AddBook
                    show={this.state.showAddBook}
                    onClose={this.hideAddBookDialog}
                    addBook={this.addBookData}
                />
            </div>
        );
    }
}
