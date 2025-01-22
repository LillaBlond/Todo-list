import "../css/Global.css";
import "../css/ShowTaskList.css";
import { Task } from "../models/Task";
import { TaskItem } from "./TaskItem";


interface IShowTaskListProps{
    taskList: Task[];
    activeFilter: string;
    removeTask: (id: number) => void;
    updateTask: (id: number, value: string, status: boolean, isPriority: boolean) => void;
    updatePriority: (id: number) => void;
}


export function ShowTaskList({taskList, activeFilter, removeTask, updateTask, updatePriority}: IShowTaskListProps){

    function showTaskItems(){

        let filteredList: Task[];
         
        if(activeFilter === "completed") {
                filteredList = taskList.filter((task) => task.isDone);
        } else if(activeFilter === "unfinished"){
            filteredList =  taskList.filter((task) => !task.isDone);
        } else{
                filteredList =  taskList;
        }

        const listOfTasks = filteredList.map((task) => {
            return <TaskItem key={task.id} id={task.id} content={task.task} status={task.isDone} isPriority={task.isPriority} removeTask={removeTask} updateTask={updateTask} updatePriority={updatePriority}></TaskItem>
        });

        if(listOfTasks.length === 0){
            switch(activeFilter){
                case "completed": return <h4>You haven't completed any tasks yet.<br/> Get cracking. You can do this!</h4>
                case "unfinished": return <h4>You've done them all! Well done!</h4>
                default: return <h4>Looks like there are no tasks added yet. <br/>Go ahead, add one :)</h4>
            }
        }

        return listOfTasks;
    }

    return <section id="task-list">
        <ul>
            {showTaskItems()}
        </ul>
    </section>
}