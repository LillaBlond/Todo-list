import "../css/Global.css"
import "../css/FilterTaskList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonHiking, faTrophy, faThumbsUp} from "@fortawesome/free-solid-svg-icons"

interface IFilterTaskListProps {
    setFilter: (filter: string) => void;
    progress: {
        total: number;
        completed: number;
        progress: number;
    }
    activeFilter: string;
}

export function FilterTaskList({setFilter, progress, activeFilter}: IFilterTaskListProps){

    return <section id="filter">
                <button id="completed-btn" type="button" className={(activeFilter === "completed") ? "active" : "inactive"} onClick={() => setFilter("completed")}>Completed</button>
                <button id="unfinished-btn" type="button" className={(activeFilter === "unfinished") ? "active" : "inactive"} onClick={() => setFilter("unfinished")}>Unfinished</button>
                <button id="all-btn" type="button" className={(activeFilter === "all") ? "active" : "inactive"} onClick={() => setFilter("all")}>All</button>
                <div id="progress">{progress.completed + "/" + progress.total + " completed"}</div>
                <div>
                    {progress.progress === 1 && <FontAwesomeIcon className="progress-icon" icon={faPersonHiking} />}
                    {progress.progress === 2 &&  <FontAwesomeIcon className="progress-icon" icon={faThumbsUp} />}
                    {progress.progress === 3 &&  <FontAwesomeIcon className="progress-icon" icon={faTrophy} />}
                </div>
            </section>
}