async function deleteCard(id) {
    try {
        const response = await fetch(`/todo/cards/${id}`, {
            method: 'DELETE',
            credentials: 'include',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json; utf-8',
            },
        });
        return response.status === 201;
    } catch (e) {
        return false;
    }
}

export default deleteCard;
