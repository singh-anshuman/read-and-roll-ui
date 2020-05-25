import React from 'react';
import BookCard from './BookCard';
import {getBooks} from './../service/BookService';
import './css/BookList.css';

export default function BookList(props) {

    return(
        <div className="book-list">
            {
                getBooks(props.searchString).map((book) => {
                    return (
                        <BookCard key={book.id} book={book}/>
                    );
                })
            }
        </div>
    );
}