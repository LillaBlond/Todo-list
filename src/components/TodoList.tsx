import "../css/Global.css";
import "../css/TodoList.css";
import { AddTask } from "../components/AddTask";
import { ShowTaskList } from "../components/ShowTaskList";
import { FilterTaskList } from "../components/FilterTaskList";
import { useState } from "react";
import { Task } from "../models/Task";


export function TodoList(){

    const everyDayItems = JSON.stringify([new Task(1, "Wake up", false, false), new Task(2, "Make coffe", false, false), new Task(3, "Open eyes", false, false), new Task(4, "Start day", false, false)]);
      const savedTaskList = JSON.parse(localStorage.getItem("savedTaskList")|| everyDayItems);
      const [tempTaskList, setTempTaskList] = useState<Task[]>(savedTaskList);
      const [activeFilter, setActiveFilter] = useState<string>("all");
      const progress = calculateProgress();


      function calculateProgress(){
        const totalTasks = tempTaskList.length;
        const completedTasks = tempTaskList.filter((task:Task)=> task.isDone).length; 
        const progress = (completedTasks / totalTasks) * 100;
        let progressLevel: number;
        
        if(progress < 30){
            progressLevel = 1;
        } else if(progress < 90){
            progressLevel = 2;
        } else progressLevel = 3

        return {total: totalTasks, completed: completedTasks, progress: progressLevel}
      }      
       
      function addTask(task: string){
          setTempTaskList([...tempTaskList, new Task(getNewId(), task, false, false)]);
        }
    
      function getNewId(){

              const idsArray = tempTaskList.map((task) => task.id)
              const lastTaskId = (idsArray.length !== 0) ? Math.max(...idsArray) : 0;

            return lastTaskId + 1;
      }
    
      function removeTask(id: number){
          setTempTaskList(tempTaskList.filter((task) => task.id !== id));
      }
    
      function setFilter(filter: string){
          setActiveFilter(filter);
      }
    
      function updateTask(id: number, value: string, status: boolean, isPriority: boolean){
        setTempTaskList(tempTaskList.map((task)=> {
          return task.id === id ? new Task(id, value, status, isPriority) : task}))
      }

      function updatePriority(id: number){

        const isCurrentPriority = tempTaskList.filter((task) => task.id === id)[0].isPriority;
        let updatedList: Task[];

        if(isCurrentPriority){

          updatedList = tempTaskList.map((task) => task.isPriority ? {id: task.id, task: task.task, isDone: task.isDone, isPriority: false} : task);
          console.log("test1")
        } else {
          
          const cleanList = tempTaskList.map((task) => task.isPriority ? {id: task.id, task: task.task, isDone: task.isDone, isPriority: false} : task);
          const updatedPriority = cleanList.map((task) => task.id === id ? {id: task.id, task: task.task, isDone: task.isDone, isPriority: true} : task);
          
          const priorityTask = updatedPriority.filter((task) => task.isPriority)
          const nonPriorotyTasks = updatedPriority.filter((task) => !task.isPriority)
          /*  nonPriorotyTasks.forEach((task) => priorityTask.push(task)); */
          
          updatedList = priorityTask;
          nonPriorotyTasks.forEach((task) => updatedList.push(task));
          
        }
        setTempTaskList(updatedList);

      }
    
      localStorage.setItem("savedTaskList", JSON.stringify(tempTaskList));
  
      return <div id="todo-list-wrapper">
        <h1>Todo List</h1>
        <AddTask addTask={addTask}></AddTask>
        <ShowTaskList updatePriority={updatePriority} taskList={tempTaskList} removeTask={removeTask} updateTask={updateTask} activeFilter={activeFilter}></ShowTaskList>
        <FilterTaskList activeFilter={activeFilter} progress={progress} setFilter={setFilter}></FilterTaskList>
        </div>
}