import React from "react";
import BookListCards from "./BookListCards";
import BookListGrid from "./BookListGrid";
import BookListLayoutSelector from './BookListLayoutSelector';

export default function BookList(props) {
    return (
        <div>
            <BookListLayoutSelector/>
            <BookListCards/>
            {/* <BookListGrid/> */}
        </div>
    )
}
