import React from "react";
import AppBody from "./components/common/AppBody";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import AppHeader from "./components/common/AppHeader";

function App() {
    return (
        <Container>
            <header>
                <AppHeader />
            </header>
            <AppBody />
        </Container>
    );
}

export default App;
