import React from "react";
import { connect } from "react-redux";
const ToDoList = ({ todos }) => {
  return <pre>{JSON.stringify(todos, null, 2)}</pre>;
};
const mapStateToProps = (state) => ({
  todos: state.todos
});
export default connect(mapStateToProps)(ToDoList);
