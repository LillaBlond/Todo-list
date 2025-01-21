import "../css/Global.css"
import "../css/FilterTaskList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonHiking, faTrophy, faThumbsUp} from "@fortawesome/free-solid-svg-icons"

interface IFilterTaskListProps {
    addFilter: (filter: string) => void;
    progress: {
        total: number;
        completed: number;
        progress: number;
    }
    filter: string;
}

export function FilterTaskList({addFilter, progress, filter}: IFilterTaskListProps){


    return <section id="filter">
        <button id="completed-btn" type="button" className={(filter === "completed") ? "active" : "inactive"} onClick={() => addFilter("completed")}>Completed</button>
        <button id="unfinished-btn" type="button" className={(filter === "unfinished") ? "active" : "inactive"} onClick={() => addFilter("unfinished")}>Unfinished</button>
        <button id="all-btn" type="button" className={(filter === "all") ? "active" : "inactive"} onClick={() => addFilter("all")}>All</button>
        <div id="progress">{progress.completed + "/" + progress.total + " completed"}
        </div>
        <div>
        {progress.progress === 1 && <FontAwesomeIcon className="progress-icon" icon={faPersonHiking} />}
        {progress.progress === 2 &&  <FontAwesomeIcon className="progress-icon" icon={faThumbsUp} />}
        {progress.progress === 3 &&  <FontAwesomeIcon className="progress-icon" icon={faTrophy} />}

        </div>
    </section>
}