import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './css/AppHeader.css';

export default function AppHeader() {
    return(
        <div className="app-header">
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">
                    <span className="app-title">
                        Read n Roll
                    </span>
                </Navbar.Brand>
            </Navbar>
        </div>
    )
}