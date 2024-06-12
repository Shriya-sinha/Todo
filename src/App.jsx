import { useState } from "react";
import AppName from "./components/AppName";
import Todo from "./components/AppTodo";
import Todolist from "./components/todolist";

function App() {
  const initialTodoItems=[];

  const [todoItems,settodoItems] = useState(initialTodoItems);

  const handleNewItem = (itemName , itemDueDate) => {
    const newTodoItems = [...todoItems,{name: itemName, duedate:itemDueDate},];
    newTodoItems.sort((a, b) => a.dueDate - b.dueDate);
    settodoItems(newTodoItems);
  };

  const handleDeleteitem = (todoName) =>{
    const newTodoItems = todoItems.filter(item => item.name !== todoName);
    newTodoItems.sort((a, b) => a.dueDate - b.dueDate);
    settodoItems(newTodoItems);
  }
  return (
    <center className="todo-container shadow p-3 mb-5 bg-body-tertiary rounded ">
      <AppName />
      <Todo onNewItem = {handleNewItem}/>
      <Todolist Todoitems={todoItems} onDeleteItem={handleDeleteitem}/>
    </center>
  );
}

export default App
