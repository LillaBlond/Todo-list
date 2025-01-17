import "./App.css";
import "./css/Global.css";
import { AddTask } from "./components/AddTask";
import { ShowTaskList } from "./components/ShowTaskList";
import { FilterTaskList } from "./components/FilterTaskList";
import { useState } from "react";

function App() {
  const [taskList, setTaskList] = useState(["Do laundry", "Work on TodoList", "Cook food", "Go for a run", "clean the flat"]);
  
  return <>
  <h1>Todo List</h1>
    <AddTask></AddTask>
    <ShowTaskList list={taskList}></ShowTaskList>
    <FilterTaskList></FilterTaskList>
    </>;
}

export default App;
