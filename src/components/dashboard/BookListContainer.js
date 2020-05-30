import React from "react";
import BookList from "./BookList";
import { connect } from "react-redux";

function BookListContainer(props) {
    return <BookList books={props.books} />;
}

function mapStateToProps(state) {
    return {
        books: state.books,
    };
}

export default connect(mapStateToProps)(BookListContainer);
