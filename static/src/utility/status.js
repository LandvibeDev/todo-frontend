const toToggledValue = (current) => {
    return current === 'todo' ? 'DONE' : 'TODO';
};

const toToggleName = (current) => {
    return current === 'TODO' ? 'done' : 'todo';
};

const toName = (status) => {
    return status === 'TODO' ? 'todo' : 'done';
};

const isDone = (status) => {
    return status === 'done';
};

const isTodo = (status) => {
    return !isDone(status);
};

export {
    toToggledValue,
    toToggleName,
    toName,
    isDone,
    isTodo
}

