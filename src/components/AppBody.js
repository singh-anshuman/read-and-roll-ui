import React from 'react';
import BookList from './BookList';
import SearchBar from './SearchBar';
import './css/AppBody.css';

export default class AppBody extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchString: ''
        };
        this.searchBooks = this.searchBooks.bind(this);
        this.reloadBookList = this.reloadBookList.bind(this);
    }

    searchBooks(searchString) {
        this.setState({
            searchString:searchString
        });
    }

    reloadBookList() {
        this.setState({
            searchString:''
        });
    }

    render() {
        return (
            <div className="app-body">
                <SearchBar searchBooks = {this.searchBooks} reloadBookList = {this.reloadBookList}/>
                <BookList searchString={this.state.searchString}/>
            </div>
        )
    }
}