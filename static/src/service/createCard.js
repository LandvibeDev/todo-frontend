async function createCard(title, assignee, priority) {
  try {
    const response = await fetch('/todo/cards', {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({ title, assignee, priority }),
    });

    return response.status === 201;
  } catch (e) {
    return false;
  }
}

export default createCard;
