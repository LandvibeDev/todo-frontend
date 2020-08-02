async function removeCard(id) {
    try {
        const response = await fetch('/todo/cards/${id}', {
            method: 'DELETE',
            credentials: 'include',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify({ id }),
        });

        return response.status === 201;
    } catch (e) {
        return false;
    }
}

export default removeCard;
