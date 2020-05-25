import React from 'react';
import BookCard from './BookCard';
import './css/BookList.css';

export default class BookList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [
                {
                    title: "Deep Work",
                    author: "Cal Newport",
                    category: "Productivity"
                },
                {
                    title: "Jab Jab Jab Right Hook",
                    author: "Gary Vaynerchuk",
                    category: "Marketing"
                },
                {
                    title: "How to win friends and influence people",
                    author: "Dale Carnegie",
                    category: "Self Help"
                },
                {
                    title: "Atomic Habits",
                    author: "James Clear",
                    category: "Productivity"
                },
                {
                    title: "Steve Jobs",
                    author: "Walter Issacson",
                    category: "Biography"
                }
            ]
        }
    }

    render() {
        return(
            <div className="book-list">
                {
                    this.state.books.map((book) => {
                        return (
                            <BookCard book={book}/>
                        );
                    })
                }
            </div>
        )
    }
}