import React from 'react';
import AppBody from './components/AppBody';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="container-fluid">
            <header>
                <NavBar/>
            </header>
            <body>
                <AppBody/>
            </body>
        </div>
    );
}

export default App;
