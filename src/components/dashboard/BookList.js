import React from "react";
import BookListCards from "./BookListCards";
import BookListGrid from "./BookListGrid";
import BookListLayoutSelector from './BookListLayoutSelector';
import { connect } from "react-redux";

function BookList(props) {
    return (
        <div>
            <BookListLayoutSelector/>
            { props.bookListLayout==='card'
            ? <BookListCards/>
            : <BookListGrid/>
            }
        </div>
    )
}

function mapStateToProps(state) {
    return {
        bookListLayout : state.referenceData.bookListLayout
    }
}

export default connect(mapStateToProps)(BookList);