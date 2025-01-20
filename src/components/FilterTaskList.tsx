import "../css/Global.css"
import "../css/FilterTaskList.css";

interface IFilterTaskListProps{
    filterFunction: (find: string) => void;
}

export function FilterTaskList({filterFunction}: IFilterTaskListProps){
    
    return <section id="filter">
        <button type="button" onClick={() => filterFunction("completed")}>Completed</button>
        <button type="button" onClick={() => filterFunction("unfinished")}>Unfinished</button>
        <button type="button" onClick={() => filterFunction("all")}>All</button>
        <div id="progress">8/20 completed
        </div>
    </section>
}