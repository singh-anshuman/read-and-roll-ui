import React from "react";
import Form from "react-bootstrap/Form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./css/SearchBox.css";
import * as bookActions from './actions/bookActions';

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.searchBooks = this.searchBooks.bind(this);
    }

    searchBooks(event) {
        this.props.bookActions.fetchBooks(event.target.value);
    }

    render() {
        return (
            <div className="search-box">
                <Form.Control
                    type="text"
                    placeholder="Search Books"
                    onChange={this.searchBooks}
                ></Form.Control>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        bookActions : bindActionCreators(bookActions,dispatch)
    };
}

export default connect(null, mapDispatchToProps)(SearchBox);
