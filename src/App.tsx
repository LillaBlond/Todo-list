import "./App.css";
import "./global.css";
import { AddTask } from "./components/AddTask";
import { ShowTaskList } from "./components/ShowTaskList";

function App() {
  return <>
  <h1>Todo List</h1>
    <AddTask></AddTask>
    <ShowTaskList></ShowTaskList>
    </>;
}

export default App;
