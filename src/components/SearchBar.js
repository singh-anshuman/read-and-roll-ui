import React from 'react';
import Button from 'react-bootstrap/Button';
import SearchBox from './SearchBox';
import './css/SearchBar.css';

export default function SearchBar(props) {
    return(
        <div className="search-bar">
            <SearchBox searchBooks = {props.searchBooks}/>
            <Button variant="primary">Add Book</Button>
        </div>
    )
}