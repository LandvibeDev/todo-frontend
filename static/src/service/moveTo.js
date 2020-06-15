async function moveTo(id, status) {
    try {
        const response = await fetch(`/todo/cards/${id}`, {
            method: 'PUT',
            credentials: 'include',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({status})
        });

        if (response.ok) {
            return response.json();
        }

        return null;
    } catch (e) {
        return null;
    }
}

export default moveTo;
