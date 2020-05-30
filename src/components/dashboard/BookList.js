import React from "react";
import BookCard from "./BookCard";
import "./css/BookList.css";

export default function BookList(props) {
    return (
        <div className="book-list">
            {props.books.map((book) => {
                return <BookCard key={book.id} book={book} />;
            })}
        </div>
    );
}
