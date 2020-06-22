import React from "react";
import BookCard from "./BookCard";
import "./css/BookList.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as bookActions from './actions/bookActions';

class BookList extends React.Component {

    componentDidMount() {
        this.props.actions.fetchBooks();
    }

    render() {
        let props = this.props;
        return (
            <div className="book-list">
                {props.books.map((book) => {
                    return <BookCard key={book.id} book={book} />;
                })}
            </div>
        );
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

export default connect(mapStateToProps,mapDispatchToProps)(BookList);
