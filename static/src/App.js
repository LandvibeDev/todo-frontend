import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import Board from './page/Board';
import Enrollment from "./page/Enrollment";
function App() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Board}/>
            <Switch>
                <Route path="/enrollment" component={Enrollment}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
