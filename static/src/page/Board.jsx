import React, { useEffect, useState } from 'react';
import Card from '../component/board/card';
import getCards from '../service/getCards';
import '../css/Board.css';
import moveTo from '../service/moveTo';
import remove from '../service/remove';
import { Link } from 'react-router-dom';
import { toName, toToggleName } from '../utility/status';

function Board() {
  const [cards, updateCards] = useState({});
  useEffect(() => {
    (async () => {
      const cards = await getCards();
      updateCards(cards);
    })();
  }, []);

  const move = async (id, priority, targetStatus) => {
    const result = await moveTo(id, targetStatus);
    if (result) {
      const originStatus = toToggleName(targetStatus);
      const index = cards[originStatus].findIndex((task) => task.id === id);
      cards[originStatus].splice(index, 1);

      const changedStatus = toName(result.status);
      cards[changedStatus].push(result);
      cards[changedStatus].sort((t1, t2) => (t1.priority < t2.priority ? -1 : 1));
      updateCards({
        todo: cards.todo,
        done: cards.done,
      });
    }
  };

  const tryRemove = async (id, status) => {
    const result = await remove(id);
    if (result) {
      const originStatus = toToggleName(status);
      const index = cards[originStatus].findIndex((task) => task.id === id);
      cards[originStatus].splice(index, 1);

      updateCards({
        todo: cards.todo,
        done: cards.done,
      });
    }
  };

  return (
    <div className="board">
      <div className="board-list">
        {
                    Object.entries(cards).map(([subject, tasks]) => <Card key={subject} subject={subject} tasks={tasks} move={move} remove={tryRemove}/>)
                }
      </div>

      <Link className="board-link" to="/enrollment">ADD</Link>
    </div>
  );
}

export default Board;
