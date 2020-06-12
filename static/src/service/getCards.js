async function getCards() {
    const cards = {
        'cards': [
            {
                'id': 1,
                'title': 'study react',
                'status': 'TODO'
            },
            {
                'id': 2,
                'title': 'study spring2',
                'status': 'DONE'
            },
            {
                'id': 3,
                'title': 'study 메론',
                'status': 'TODO'
            },
            {
                'id': 4,
                'title': 'study 김치',
                'status': 'TODO'
            },
            {
                'id': 5,
                'title': 'study 오징어',
                'status': 'TODO'
            },
            {
                'id': 6,
                'title': 'study 코끼리',
                'status': 'TODO'
            }
        ]
    };
    const todo = cards['cards'].filter(card => card['status'] === 'TODO');
    const done = cards['cards'].filter(card => card['status'] === 'DONE');
    return {
        todo, done
    }
}

export default getCards;
