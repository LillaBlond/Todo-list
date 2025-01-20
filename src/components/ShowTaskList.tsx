import "../css/Global.css";
import "../css/ShowTaskList.css";
import { Task } from "../models/Task";
import { TaskItem } from "./TaskItem";


interface IShowTaskListProps{
    taskList: Task[];
    removeItem: (id: number) => void;
    updateTask: (id: number, value: string, status: boolean) => void;
}


export function ShowTaskList({taskList, removeItem, updateTask}: IShowTaskListProps){

    function showTaskItems(){
        const listOfTasks = taskList.map((task) => {
           
            return <TaskItem key={task.id} id={task.id} content={task.task} status={task.isDone} removeItem={removeItem} updateTask={updateTask}></TaskItem>
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