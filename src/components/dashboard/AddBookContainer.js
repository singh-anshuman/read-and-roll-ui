import React from "react";
import AddBook from "./AddBook";
import { connect } from "react-redux";

class AddBookContainer extends React.Component {
    render() {
        return <AddBook books={this.props.books} />;
    }
}

function mapStateToProps(state) {
    return {
        books: state.books,
    };
}

export default connect(mapStateToProps)(AddBookContainer);
