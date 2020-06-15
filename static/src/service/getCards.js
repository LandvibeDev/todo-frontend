async function getCards() {
    try {
        const response = await fetch('/todo/cards', {
            method: 'GET',
            credentials: 'include',
            mode: 'cors',
            headers: {
                'Accept': 'application/json; utf-8'
            }
        });

        const cards = await response.json();
        const todo = cards.filter(card => card['status'] === 'TODO');
        const done = cards.filter(card => card['status'] === 'DONE');
        return {
            todo, done
        }
    } catch (e) {
        return {
            todo: [],
            done: []
        };
    }

}

export default getCards;
