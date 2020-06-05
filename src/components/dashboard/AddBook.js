import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./css/AddBook.css";
import { connect } from "react-redux";
import { addBookAction } from "./actions/AddBookAction";

function AddBook(props) {
    let book = {
        title: "",
        author: "",
        category: "Productivity",
    };

    let handleClose = () => {
        props.onClose();
    };

    let addBook = () => {
        props.addBook(book);
    };

    let onChange = (event) => {
        book[event.target.name] = event.target.value;
    };

    return (
        <Modal show={props.show} onHide={handleClose} centered>
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
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={addBook}>
                    Add
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        addBook: (book) => dispatch(addBookAction(book)),
    };
}

export default connect(null, mapDispatchToProps)(AddBook);
