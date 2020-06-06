import React from "react";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { toggleAddBookDialog } from "./actions/ToggleAddBookDialog";
import AddBook from "./AddBook";
import "./css/SearchBar.css";
import SearchBox from "./SearchBox";

function SearchBar(props) {
    return (
        <div className="search-bar">
            <SearchBox />
            <Button variant="primary" onClick={props.toggleAddBookDialog}>
                Add Book
            </Button>
            <AddBook />
        </div>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        toggleAddBookDialog: () => dispatch(toggleAddBookDialog()),
    };
}

export default connect(null, mapDispatchToProps)(SearchBar);
