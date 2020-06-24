import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as bookActions from './actions/bookActions';
import BookCard from "./BookCard";
import "./css/BookListCards.css";


class BookListCards extends React.Component {
    componentDidMount() {
        this.props.actions.fetchBooks();
    }

    render() {
        let props = this.props;
        if(!props.books.loading) {
            return(
                <div className="book-list-cards">
                    {props.books.data.map((book) => {
                        return <BookCard key={book.id} book={book} />;
                    })}
                </div>
            )
        } else {
            return(
                <div>Loading books...</div>
            )
        }    
    }
}

function mapStateToProps(state) {
    return {
        books: state.books,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(bookActions,dispatch)
    } 
}

export default connect(mapStateToProps,mapDispatchToProps)(BookListCards);
