const Todo = () => {
  return (
    <div className="row a-row">
      <div className="col-4">
        <input
          type="text"
          className="Todo-input form-control"
          placeholder="Enter your task"
        ></input>
      </div>
      <div className="col-4">
        <input type="date" className="Todo-date form-control"></input>
      </div>
      <div className="col-4">
        <button type="button" className="btn btn-dark shadow rounded-pill ">
          Add
        </button>
      </div>
    </div>
  );
}

export default Todo
