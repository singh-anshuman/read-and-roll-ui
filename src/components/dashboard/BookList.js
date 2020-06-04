import React from "react";
import BookCard from "./BookCard";
import "./css/BookList.css";
import { connect } from "react-redux";

function BookList(props) {
    return (
        <div className="book-list">
            {props.books.map((book) => {
                return <BookCard key={book.id} book={book} />;
            })}
        </div>
    );
}

function mapStateToProps(state) {
    return {
        books: state.books,
    };
}

export default connect(mapStateToProps)(BookList);
