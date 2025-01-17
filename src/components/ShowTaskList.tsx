import "../css/Global.css";
import "../css/ShowTaskList.css";
import { TaskItem } from "./TaskItem";


interface IShowTaskListProps{
    taskList: string[];
}


export function ShowTaskList({taskList}: IShowTaskListProps){

    function showTaskItems(){
        const listOfTasks = taskList.map((task, i) => {
           
            return <TaskItem id={i} content={task}></TaskItem>
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