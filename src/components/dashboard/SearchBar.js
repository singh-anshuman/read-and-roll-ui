import React from "react";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import * as bookActions from './actions/bookActions';
import AddBook from "./AddBook";
import "./css/SearchBar.css";
import SearchBox from "./SearchBox";
import { bindActionCreators } from "redux";

function SearchBar(props) {
    return (
        <div className="search-bar">
            <SearchBox />
            <Button variant="primary" onClick={props.bookActions.toggleAddBookDialog}>
                Add Book
            </Button>
            <AddBook />
        </div>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        bookActions: bindActionCreators(bookActions,dispatch)
    };
}

export default connect(null, mapDispatchToProps)(SearchBar);
