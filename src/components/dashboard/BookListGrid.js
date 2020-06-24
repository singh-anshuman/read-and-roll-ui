import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as bookActions from './actions/bookActions';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';



class BookListGrid extends React.Component {

    componentDidMount() {
        this.props.actions.fetchBooks();
    }

    render() {
        const columnDefs = [
            { headerName: "Title", field: "title" },
            { headerName: "Author", field: "author" },
            { headerName: "Category", field: "category" }
        ];
        return (
            <div className="ag-theme-alpine" style={ {height: '600px'} }>
                <AgGridReact
                    columnDefs={columnDefs}
                    rowData={this.props.books.data}>
                </AgGridReact>
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