import "../css/Global.css";
import "../css/TodoList.css";
import { AddTask } from "../components/AddTask";
import { ShowTaskList } from "../components/ShowTaskList";
import { FilterTaskList } from "../components/FilterTaskList";
import { useState } from "react";
import { Task } from "../models/Task";


export function TodoList(){

    const everyDayItems = JSON.stringify([new Task(1, "Wake up", false), new Task(2, "Make coffe", false), new Task(3, "Open eyes", false), new Task(4, "Start day", false)]);
      const savedTaskList = JSON.parse(localStorage.getItem("savedTaskList")|| everyDayItems);
      const [tempTaskList, setTempTaskList] = useState<Task[]>(savedTaskList);
      const [filter, setFilter] = useState<string>("all");
      const progress = calculateProgress();


      function calculateProgress(){
        const totalTasks = tempTaskList.length;
        const completedTasks = tempTaskList.filter((task:Task)=> task.isDone).length; 
        const progress = Math.round((tempTaskList.filter((task:Task)=> task.isDone).length / (savedTaskList.length) * 100));
        let progressLevel: number;
        
        if(progress < 30){
            progressLevel = 1;
        } else if(progress < 90){
            progressLevel = 2;
        } else progressLevel = 3

        return {total: totalTasks, completed: completedTasks, progress: progressLevel}
      }

      
       
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
    
      function addFilter(filter: string){
          setFilter(filter);
      }
    
      function updateTask(id: number, value: string, status: boolean){
          setTempTaskList(tempTaskList.map((task)=> {
            return task.id === id ? new Task(id, value, status) : task}))
      }
    
      localStorage.setItem("savedTaskList", JSON.stringify(tempTaskList));
  
      return <div id="todo-list-wrapper">
        <h1>Todo List</h1>
        <AddTask addTask={addTask}></AddTask>
        <ShowTaskList taskList={tempTaskList} removeItem={removeTask} updateTask={updateTask} filter={filter}></ShowTaskList>
        <FilterTaskList filter={filter} progress={progress} addFilter={addFilter}></FilterTaskList>
        </div>
}