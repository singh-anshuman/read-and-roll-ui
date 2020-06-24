import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as bookActions from './actions/bookActions';


class BookListGrid extends React.Component {
    componentDidMount() {
        this.props.actions.fetchBooks();
    }

    render() {
        return (
            <div>
                Book List Grid
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

export default connect(mapStateToProps,mapDispatchToProps)(BookListGrid);