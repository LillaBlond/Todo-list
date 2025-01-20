import "./App.css";
import "./css/Global.css";
import { AddTask } from "./components/AddTask";
import { ShowTaskList } from "./components/ShowTaskList";
import { FilterTaskList } from "./components/FilterTaskList";
import { useState } from "react";
import { Task } from "./models/task";

function App() {
  const everyDayItems = JSON.stringify([new Task(1, "Wake up"), new Task(2, "Make coffe"), new Task(3, "Open eyes"), new Task(4, "Start day")]);
  const savedTaskList = JSON.parse(localStorage.getItem("savedTaskList")|| everyDayItems);
  const [tempTaskList, setTempTaskList] = useState<Task[]>(savedTaskList);
  
  function addTask(task: string){
      setTempTaskList([...tempTaskList, new Task(getId(), task)]);
    }

  function getId(){
        const idArray = tempTaskList.map((task) => task.id)
        const findLastID = Math.max(...idArray);
        return findLastID + 1;
  }

    function removeTask(id: number){
        setTempTaskList(tempTaskList.filter((task) => task.id !== id));
    }

    localStorage.setItem("savedTaskList", JSON.stringify(tempTaskList));

  return <>
  <h1>Todo List</h1>
    <AddTask addTask={addTask}></AddTask>
    <ShowTaskList taskList={tempTaskList} removeItem={removeTask}></ShowTaskList>
    <FilterTaskList></FilterTaskList>
    </>;
}

export default App;
