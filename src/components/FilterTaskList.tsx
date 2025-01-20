import "../css/Global.css"
import "../css/FilterTaskList.css";

interface IFilterTaskListProps {
    filterList: (show: string) => void;
}

export function FilterTaskList({filterList}: IFilterTaskListProps){

    return <section id="filter">
        <button type="button" onClick={() => filterList("completed")}>Completed</button>
        <button type="button" onClick={() => filterList("unfinished")}>Unfinished</button>
        <button type="button" onClick={() => filterList("all")}>All</button>
        <div id="progress">8/20 completed
        </div>
    </section>
}