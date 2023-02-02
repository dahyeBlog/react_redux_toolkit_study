import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

export const addToDo = (text) => {
  return {
    type: ADD,
    text,
  };
};

export const deleteToDo = (id) => {
  return {
    type: DELETE,
    id,
  };
};

JSON.parse(localStorage.getItem("todos")) ||
  localStorage.setItem("todos", JSON.stringify([]));

const reducer = (state = JSON.parse(localStorage.getItem("todos")), action) => {
  switch (action.type) {
    case ADD:
      const addItem = [{ text: action.text, id: Date.now() }, ...state];
      localStorage.setItem("todos", JSON.stringify(addItem));
      return addItem;
    case DELETE:
      const delItem = state.filter((toDo) => toDo.id !== action.id);
      localStorage.setItem("todos", JSON.stringify(delItem));
      return delItem;
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
