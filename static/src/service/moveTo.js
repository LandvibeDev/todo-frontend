async function moveTo(id) {
    try {
        return Promise.resolve({
            id, status: 'DONE'
        })
    } catch (e) {

        return false;

    }

}

export default moveTo;
