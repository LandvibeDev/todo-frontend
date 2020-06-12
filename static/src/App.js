import React from 'react';
import {
    BrowserRouter,
    Route
} from "react-router-dom";
import Board from './page/Board';
function App() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Board}/>
        </BrowserRouter>
    );
}

export default App;
