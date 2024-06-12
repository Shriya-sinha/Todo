import { useState } from "react";
import PropTypes from "prop-types";

const Todo = ({ onNewItem }) => {
const [todoName, setTodoName] = useState("");
const [dueDate, setDueDate] = useState("");
const [todoNameError, setTodoNameError] = useState(false);
const [dueDateError, setDueDateError] = useState(false);

const handleNameChange = (event) => {
  setTodoName(event.target.value);
  setTodoNameError(false);
};

const handleDateChange = (event) => {
  setDueDate(event.target.value);
  setDueDateError(false);
};

const handleAddButtonOnClicked = () => {
  if (todoName.trim() && dueDate) {
    onNewItem(todoName.trim(), dueDate);
  } else {
    if (!todoName.trim()) {
      setTodoNameError(true);
    }
    if (!dueDate) {
      setDueDateError(true);
    }
  }
  setDueDate("");
  setTodoName("");
};

  return (
    <div className="row a-row">
      <div className="col-4">
        <input
          type="text"
          id="Todo-name"
          className={`form-control form-label ${
            todoNameError ? "is-invalid" : ""
          }`}
          value={todoName}
          placeholder="Enter your task"
          onChange={handleNameChange}
        ></input>
      </div>
      <div className="col-4">
        <input
          type="date"
          id="todo-date"
          value={dueDate}
          className={`form-control ${
            dueDateError ? "is-invalid" : ""
          }`}
          onChange={handleDateChange}
        ></input>
      </div>
      <div className="col-4">
        <button
          type="button"
          className="btn btn-dark shadow rounded-pill "
          onClick={handleAddButtonOnClicked}
        >
          Add
        </button>
      </div>
    </div>
  );
};
Todo.propTypes = {
  onNewItem: PropTypes.object,
};
export default Todo;
