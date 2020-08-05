async function getCards() {
  try {
    const response = await fetch('/todo/cards', {
      method: 'GET',
      credentials: 'include',
      mode: 'cors',
      headers: {
        Accept: 'application/json; utf-8',
      },
    });

    const cards = await response.json();
    //console.log(cards); //todo done 상관없이 출력
    const todo = cards.filter((card) => card.status === 'TODO');
    const done = cards.filter((card) => card.status === 'DONE');
    //console.log(todo,done);

    return {  //객체로 반환, ㅅtodo:[{},{}]
      todo, done,
    };
  } catch (e) {
    return {
      todo: [],
      done: [],
    };
  }
}

export default getCards;
