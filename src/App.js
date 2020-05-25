import React from 'react';
import AppBody from './components/AppBody';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import AppHeader from './components/AppHeader';

function App() {
    return (
        <Container fluid>
            <header>
                <AppHeader/>
            </header>
            <body>
                <AppBody/>
            </body>
        </Container>
    );
}

export default App;