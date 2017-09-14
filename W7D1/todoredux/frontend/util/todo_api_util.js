export const fTodos = () => (
  $.ajax({
    method: 'GET',
    url: 'api/todos'
  })
);

export const cTodo = (todo) => (
  $.ajax({
    method: 'POST',
    url: 'api/todos',
    data: {todo}
  })
);

export const uTodo = (todo) => (
  $.ajax({
    method: 'PATCH',
    url:  `/api/todos/${todo.id}`,
    data: {todo}
  })
);

export const dTodo = (todo) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/todos/${todo.id}`,
    data: {todo}
  })
);
