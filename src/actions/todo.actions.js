let nextToDoId = 0;
export const addToDo = (text) => ({
  type: "ADD_TODO",
  id: nextToDoId++,
  complete: false,
  text
});

export const toggleTodo = (id) => ({
  type: "TOGGLE_TODO",
  id
});

export const AVAILABLE_FILTERS = {
  SHOW_COMPLETE: "SHOW_COMPLETE",
  SHOW_ALL: "SHOW_ALL",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};
