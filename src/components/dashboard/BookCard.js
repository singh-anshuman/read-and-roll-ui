import React from 'react';
import Card from 'react-bootstrap/Card';
import './css/BookCard.css';


export default function BookCard(props) {
    return (
        <Card className="book-card">
            <Card.Body>
                <Card.Title className="book-title">
                    {props.book.title}
                </Card.Title>
                <div>
                    <div>
                        {props.book.author}
                    </div>
                    <div className="book-category">
                        {props.book.category}
                    </div>
                </div>
            </Card.Body>
        </Card>        
    )
}