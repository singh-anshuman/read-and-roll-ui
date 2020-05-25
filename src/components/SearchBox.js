import React from 'react';
import Form from 'react-bootstrap/Form';
import './css/SearchBox.css';


export default class SearchBox extends React.Component {

    constructor(props) {
        super(props);
        this.searchBooks = this.searchBooks.bind(this);
    }

    searchBooks(event) {
        this.props.searchBooks(event.target.value);
    }


    render() {
        return(
            <div className="search-box">
                <Form.Control type="text" placeholder="Search Books" onChange={this.searchBooks}></Form.Control>
            </div>
        )
    }
}