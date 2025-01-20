import "../css/Global.css"
import "../css/FilterTaskList.css";
import { Task } from "../models/Task";

interface IFilterTaskListProps {
    addFilter: (filter: string) => void;
    taskList: Task[];
}

export function FilterTaskList({addFilter, taskList}: IFilterTaskListProps){

    const data ={
        total: taskList.length,
        completed: taskList.filter((task)=> task.isDone).length

    }

    return <section id="filter">
        <button type="button" onClick={() => addFilter("completed")}>Completed</button>
        <button type="button" onClick={() => addFilter("unfinished")}>Unfinished</button>
        <button type="button" onClick={() => addFilter("all")}>All</button>
        <div id="progress">{data.completed + "/" + data.total + " completed"}
        </div>
    </section>
}