export const allTodos = (state) => {
  let values = Object.values(state.todos);
  let res = [];
  Object.keys(state.todos).forEach((id) => {
    values.forEach((value) => {
      if (value.id === parseInt(id)){
        res.push(value);
      }
    });
  });
  return res;
};

export const allErrors = (state) => {
  return state.errors;
};
