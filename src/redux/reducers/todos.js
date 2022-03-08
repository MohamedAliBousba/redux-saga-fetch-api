export const GET_TODOS = "GET_TODOS";
const SET_TODOS = "SET_TODOS";

export const getTodos = () => ({
  type: GET_TODOS
});

export const setTodos = (todos) => ({
  type: SET_TODOS,
  todos
});

export default (state = {}, action) => {
  switch (action.type) {
    case SET_TODOS:
      const { todos } = action;
      return { ...state, todos };
    default:
      return state;
  }
};
