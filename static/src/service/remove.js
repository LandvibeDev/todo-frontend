async function remove(id) {
  try {
    const response = await fetch(`/todo/cards/${id}`, {
      method: 'DELETE',
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    });

    return response.status === 204;
  } catch (e) {
    return false;
  }
}

export default remove;
