import React from 'react';
import AppBody from './components/AppBody';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import AppHeader from './components/AppHeader';

function App() {
    return (
        <Container>
            <header>
                <AppHeader/>
            </header>
            <AppBody/>
        </Container>
    );
}

export default App;