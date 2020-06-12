function createCard(...titleList) {
    const body = titleList.map(title => {
        return {title}
    });
    console.log(body);
    try {
        return true;
    } catch (e) {
        return false;
    }

}

export default createCard;
