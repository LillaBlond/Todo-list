import "../css/Global.css";
import "../css/ShowTaskList.css";
import { Task } from "../models/task";
import { TaskItem } from "./TaskItem";


interface IShowTaskListProps{
    taskList: Task[];
}


export function ShowTaskList({taskList}: IShowTaskListProps){

    function showTaskItems(){
        const listOfTasks = taskList.map((task) => {
           
            return <TaskItem key={task.id} id={task.id} content={task.task}></TaskItem>
           /*  <li>{task}</li> */
        });

        return listOfTasks;
    }

    return <section id="task-list">
        <ul>
            {showTaskItems()}
        </ul>
    </section>
}