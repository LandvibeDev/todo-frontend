import React, {useEffect, useState} from 'react';
import Card from '../component/board/card';
import getCards from '../service/getCards';
import '../css/Board.css';
import moveTo from '../service/moveTo';
import {Link} from 'react-router-dom';
import {toName, toToggleName} from '../utility/status';
import removeCard from "../service/removeCard";

function Board() {
    const [cards, updateCards] = useState({});
    useEffect(() => { // 실행했을 때 딱 한번만 실행
        (async () => {
            const cards = await getCards();
            updateCards(cards);
        })();
    }, []);

    const move = async (id, targetStatus) => {
        const result = await moveTo(id, targetStatus);
        if (result) {
            const originStatus = toToggleName(targetStatus);
            const index = cards[originStatus].findIndex((task) => task.id === id);
            cards[originStatus].splice(index, 1);

            const changedStatus = toName(result.status);
            cards[changedStatus].push(result);

            updateCards({
                todo: cards.todo,
                done: cards.done,
            });
        }
    };

    function remove(id) {
        // const isSuccesses = await removeCard(id);
        const isSuccesses = removeCard(id);
        if (isSuccesses) {
            //history.goBack();
            console.log(id);
            const todo = cards.todo;
            const done = cards.done;
            console.log(todo);
            console.log(done);

            let index = todo.findIndex((value) => {  //index 알아내기
                return value.id === id;
            })

            if (index !== -1) {     //todod에서 찾았을 경우
                todo.splice(index,1);   //(삭제 시작할 index, 삭제할 개수)
            }else{  //todo에서 못찾았을 경우 done에서 찾는다.
                index = done.findIndex((value) => {  //index 알아내기
                    return value.id === id;
                });
                done.splice(index,1);
            }

            console.log(todo);
            console.log(done);

            //변경된 상태를 react에게 알려주어야한다. 아래 코드 안쓰면 x눌러도 화면에서 안사라짐.
            updateCards({
                "todo" : todo,
                "done":done
                //todo, done
                //이렇게 한줄로만 써도 된다. 똑같은것이다.
            });

            //updateCards 호출
            // react 해당 데이터가 변경이 됐구나!
            // react 해당 데이터를 사용하는 모든 컴포넌트를 부라우저에서 다시 그려준다.
        } else {
            alert('카드 삭제에 실패했습니다.');
        }
    }

    return (
        <div className="board">
            <div className="board-list">
                {
                    Object.entries(cards).map(([subject, tasks]) => // Object.entries(cards) : ㅏkey에 done, value에 해당값들. 즉 [todo,[{},{}]]로 만들어준다.
                            <Card remove={remove} key={subject} subject={subject} tasks={tasks} move={move}/>, // map(function) : function를 적용시켜서 변환
                        //remove={remove} : 자식한테 props로 전달해준다.
                    )
                }
            </div>

            <Link className="board-link" to="/enrollment">ADD</Link>
        </div>
    );
}

export default Board;
