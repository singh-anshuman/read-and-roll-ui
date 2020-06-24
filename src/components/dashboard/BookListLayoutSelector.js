import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as bookActions from './actions/bookActions';
import './css/BookListLayoutSelector.css';

function BookListLayoutSelector(props) {

    function selectCardLayout() {
        props.bookActions.selectBooklistLayout('card');
    }

    function selectGridLayout() {
        props.bookActions.selectBooklistLayout('grid');
    }

    const cardButtonVariant = props.bookListLayout === 'card' ? 'dark' : 'light';
    const gridButtonVariant = props.bookListLayout !== 'card' ? 'dark' : 'light';

    return (
        <div className="book-list-layout-selector">
            <ButtonGroup aria-label="Basic example">
                <Button variant={cardButtonVariant} onClick={selectCardLayout}>Card</Button>
                <Button variant={gridButtonVariant} onClick={selectGridLayout}>Grid</Button>
            </ButtonGroup>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        bookListLayout: state.referenceData.bookListLayout
    } 
}

function mapDispatchToProps(dispatch) {
    return {
        bookActions: bindActionCreators(bookActions,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BookListLayoutSelector);