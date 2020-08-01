import React, {useEffect, useState} from 'react';
import Card from '../component/board/card';
import getCards from "../service/getCards";
import '../css/Board.css';
import moveTo from "../service/moveTo";
import {Link} from "react-router-dom";
import {toName, toToggleName} from '../utility/status';
import deleteCard from "../service/deleteCard";

function Board() {
    const [cards, updateCards] = useState({});
    useEffect(() => {
        (async () => {
            const cards = await getCards();
            updateCards(cards);
        })();
    }, []);

    const move = async (id, targetStatus) => {
        const result = await moveTo(id, targetStatus);
        if (!!result) {
            const originStatus = toToggleName(targetStatus);
            const index = cards[originStatus].findIndex(task => task.id === id);
            cards[originStatus].splice(index, 1);

            const changedStatus = toName(result.status);
            cards[changedStatus].push(result);

            updateCards({
                todo: cards.todo,
                done: cards.done
            });
        }
    };
    function remove(id) {
        const todo = cards.todo;
        const done = cards.done;

        let index = todo.findIndex((value) => {
            return value.id === id;
        });
        if(index!==-1) {
            todo.splice(index, 1);
            const isSuccesses = deleteCard(id);
            if (!isSuccesses) {
                alert('NotFound(todo)');
            }
        }
        else{
            index = done.findIndex((value) => {
                return value.id === id;
            });
            done.splice(index, 1);
            const isSuccesses = deleteCard(id);
            if (!isSuccesses) {
                alert('NotFound(done)');
            }
        }

        updateCards({
            "todo": cards.todo,
            "done": cards.done
        });
    }

    return (
        <div className='board'>
            <div className='board-list'>
                {
                    Object.entries(cards).map(([subject, tasks]) => {
                        return <Card key={subject} subject={subject} tasks={tasks} move={move} remove={remove}/>;
                    })
                }
            </div>

            <Link className='board-link' to="/enrollment">ADD</Link>
        </div>
    );
}

export default Board;
