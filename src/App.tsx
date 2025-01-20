import "./App.css";
import "./css/Global.css";
import { AddTask } from "./components/AddTask";
import { ShowTaskList } from "./components/ShowTaskList";
import { FilterTaskList } from "./components/FilterTaskList";
import { useState } from "react";
import { Task } from "./models/task";

function App() {
  const everyDayItems = JSON.stringify([new Task(1, "Wake up", false), new Task(2, "Make coffe", false), new Task(3, "Open eyes", false), new Task(4, "Start day", false)]);
  const savedTaskList = JSON.parse(localStorage.getItem("savedTaskList")|| everyDayItems);
  const [tempTaskList, setTempTaskList] = useState<Task[]>(savedTaskList);
  const [filteredList, setFilteredList] = useState<Task[]>(tempTaskList);
  
  function addTask(task: string){
      setTempTaskList([...tempTaskList, new Task(getNewId(), task, false)]);
    }

  function getNewId(){

          const idArray = tempTaskList.map((task) => task.id)
          const lastTaskId = (idArray.length !== 0) ? Math.max(...idArray) : 0;

        return lastTaskId + 1;
  }

    function removeTask(id: number){
        setTempTaskList(tempTaskList.filter((task) => task.id !== id));
    }

    function filterTaskList(find: string){

      switch(find){
        case "unfinished": 
           setFilteredList(savedTaskList.filter((task: Task) => !task.isDone));
            break; 
        case "completed":
          setFilteredList(savedTaskList.filter((task: Task) => task.isDone));
          break; 
        default:
          setFilteredList(savedTaskList);
          break;
      }
      console.log(filteredList);
    }

    function updateTask(id: number, value: string, status: boolean){
        setTempTaskList(tempTaskList.map((task)=> {
          return task.id === id ? new Task(id, value, status) : task}))
    }

    localStorage.setItem("savedTaskList", JSON.stringify(tempTaskList));

  return <>
  <h1>Todo List</h1>
    <AddTask addTask={addTask}></AddTask>
    <ShowTaskList taskList={filteredList} removeItem={removeTask} updateTask={updateTask}></ShowTaskList>
    <FilterTaskList filterList={filterTaskList}></FilterTaskList>
    </>;
}

export default App;
