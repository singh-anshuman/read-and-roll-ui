import React from "react";
import Form from "react-bootstrap/Form";
import "./css/SearchBox.css";
import { searchBooksAction } from "./actions/SearchBooksAction";
import { connect } from "react-redux";

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.searchBooks = this.searchBooks.bind(this);
    }

    searchBooks(event) {
        this.props.searchBooks(event.target.value);
    }

    render() {
        return (
            <div className="search-box">
                <Form.Control
                    type="text"
                    placeholder="Search Books"
                    onChange={this.searchBooks}
                ></Form.Control>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        books: state.books,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        searchBooks: (searchString) =>
            dispatch(searchBooksAction(searchString)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
