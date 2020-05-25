import React from 'react';
import FromControl from 'react-bootstrap/FormControl';
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
                <FromControl type="text" placeholder="Search Books" onChange={this.searchBooks}></FromControl>
            </div>
        )
    }
}