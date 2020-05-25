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
                <Card.Text>
                    <div>
                        {props.book.author}
                    </div>
                    <div>
                        {props.book.category}
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>        
    )
}