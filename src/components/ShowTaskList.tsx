import "../css/Global.css";
import "../css/ShowTaskList.css";
import { Task } from "../models/task";
import { TaskItem } from "./TaskItem";


interface IShowTaskListProps{
    taskList: Task[];
    removeItem: (id: number) => void;
}


export function ShowTaskList({taskList, removeItem}: IShowTaskListProps){

    function showTaskItems(){
        const listOfTasks = taskList.map((task) => {
           
            return <TaskItem key={task.id} id={task.id} content={task.task} removeItem={removeItem}></TaskItem>
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