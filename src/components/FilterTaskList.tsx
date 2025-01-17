import "../css/Global.css"
import "../css/FilterTaskList.css";



export function FilterTaskList(){
    
    return <section id="filter">
        <button type="button">Completed</button>
        <button type="button">Unfinished</button>
        <button type="button">All</button>
        <div id="progress">8/20 completed
        </div>
    </section>
}