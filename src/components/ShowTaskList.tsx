import "../css/Global.css";
import "../css/ShowTaskList.css";
import { Task } from "../models/Task";
import { TaskItem } from "./TaskItem";


interface IShowTaskListProps{
    taskList: Task[];
    filter: string;
    removeItem: (id: number) => void;
    updateTask: (id: number, value: string, status: boolean) => void;
}


export function ShowTaskList({taskList, filter, removeItem, updateTask}: IShowTaskListProps){

    function showTaskItems(){

        let filteredList: Task[];
         
        if(filter === "completed") {
                filteredList = taskList.filter((task) => task.isDone);
        } else if(filter === "unfinished"){
            filteredList =  taskList.filter((task) => !task.isDone);
        } else{
                filteredList =  taskList;
        }

        const listOfTasks = filteredList.map((task) => <TaskItem key={task.id} id={task.id} content={task.task} status={task.isDone} removeItem={removeItem} updateTask={updateTask}></TaskItem>
        );
        console.log(listOfTasks);

        if(listOfTasks.length === 0){
            switch(filter){
                case "completed": return <h4>You haven't completed any tasks yet.<br/> Get cracking. You can do this :)</h4>
                case "unfinished": return <h4>You've done them all! I think you deserve a long break :)</h4>
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