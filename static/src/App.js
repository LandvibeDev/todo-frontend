import React from 'react';
import Board from './component/Board';
import './css/Board.css';
function App() {
    return (
        <div>
            <Board className='first'/>
            <Board className='second'/>
            <Board className='third'/>
        </div>
    );
}

export default App;
