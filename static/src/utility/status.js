const toToggledValue = (current) => (current === 'todo' ? 'DONE' : 'TODO');

const toToggleName = (current) => (current === 'TODO' ? 'done' : 'todo');

const toName = (status) => (status === 'TODO' ? 'todo' : 'done');

const isDone = (status) => status === 'done';

const isTodo = (status) => !isDone(status);

export {
  toToggledValue,
  toToggleName,
  toName,
  isDone,
  isTodo,
};
