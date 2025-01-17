import "./App.css";
import "./css/Global.css";
import { AddTask } from "./components/AddTask";
import { ShowTaskList } from "./components/ShowTaskList";
import { FilterTaskList } from "./components/FilterTaskList";

function App() {
  return <>
  <h1>Todo List</h1>
    <AddTask></AddTask>
    <ShowTaskList></ShowTaskList>
    <FilterTaskList></FilterTaskList>
    </>;
}

export default App;
