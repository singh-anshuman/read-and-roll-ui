import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./css/AddBook.css";
import { connect } from "react-redux";
import * as bookActions from './actions/bookActions';
import { bindActionCreators } from "redux";

function AddBook(props) {
    let book = {
        title: "",
        author: "",
        category: "Productivity",
    };

    let addBook = () => {
        props.bookActions.addBook(book);
        props.bookActions.toggleAddBookDialog();
        props.bookActions.fetchBooks();
    };

    let onChange = (event) => {
        book[event.target.name] = event.target.value;
    };

    return (
        <Modal
            show={props.showAddBookDialog}
            onHide={props.toggleAddBookDialog}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Add Book</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="bookTitleFg">
                        <Form.Label>Book Title</Form.Label>
                        <Form.Control
                            name="title"
                            type="text"
                            onChange={onChange}
                            placeholder="Title"
                        />
                    </Form.Group>
                    <Form.Group controlId="bookAuthorFg">
                        <Form.Label>Book Author</Form.Label>
                        <Form.Control
                            name="author"
                            type="text"
                            onChange={onChange}
                            placeholder="Author"
                        />
                    </Form.Group>
                    <Form.Group controlId="bookCategoryFg">
                        <Form.Label>Book Category</Form.Label>
                        <Form.Control
                            name="category"
                            onChange={onChange}
                            as="select"
                        >
                            <option>Productivity</option>
                            <option>Marketing</option>
                            <option>Self Help</option>
                            <option>Biography</option>
                            <option>History</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.toggleAddBookDialog}>
                    Close
                </Button>
                <Button variant="primary" onClick={addBook}>
                    Add
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

function mapStateToProps(state) {
    return {
        showAddBookDialog: state.referenceData.showAddBookDialog,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        bookActions: bindActionCreators(bookActions,dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBook);
