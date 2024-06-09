import AppName from "./components/AppName";
import Todo from "./components/AppTodo";
import Todolist from "./components/todolist";

function App() {
  const Todoitems=[
    {
    name:"Milk",
    duedate:"2/5/2024",     
    },
    {
    name:"Milk",
    duedate:"2/5/2024",
    }
  ]
  return (
    <center className="todo-container shadow p-3 mb-5 bg-body-tertiary rounded ">
      <AppName />
      <Todo />
      <Todolist todoItems={Todoitems}/>
    </center>
  );
}

export default App
