import React from 'react';
import BookList from './BookList';
import './css/AppBody.css';

export default function AppBody() {
    return (
        <div className="app-body">
            <BookList />
        </div>
    )
}