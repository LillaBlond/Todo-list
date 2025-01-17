import "./App.css";
import "./css/Global.css";
import { AddTask } from "./components/AddTask";
import { ShowTaskList } from "./components/ShowTaskList";
import { FilterTaskList } from "./components/FilterTaskList";
import { useState } from "react";

function App() {
  const everyDayItems = ["Wake up", "Make Coffe", "Open eyes", "Start day"];
  const savedTaskList:string[] = JSON.parse(localStorage.getItem("savedTaskList")) || everyDayItems;
  const [tempTaskList, setTempTaskList] = useState(savedTaskList);

  function addTask(task: string){
      setTempTaskList([...tempTaskList, task]);
    }

    localStorage.setItem("savedTaskList", JSON.stringify(tempTaskList));

  return <>
  <h1>Todo List</h1>
    <AddTask addTask={addTask}></AddTask>
    <ShowTaskList taskList={tempTaskList}></ShowTaskList>
    <FilterTaskList></FilterTaskList>
    </>;
}

export default App;
