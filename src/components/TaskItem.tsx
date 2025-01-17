import "../css/Global.css";
import "../css/TaskItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPen, faFire} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";

interface ITaskItemProps{
    id: number;
    content: string;
}


export function TaskItem({id, content}: ITaskItemProps){

    const [isDone, setIsDone] = useState<boolean>(false);

    function changeStatus(){
        isDone ? setIsDone(false) : setIsDone(true);
    }
    console.log(isDone);

    return <li className="taskItem">
        <input type="checkbox" name="checkbox" onClick={changeStatus}/>
        <input type="text" value={content} disabled/>
        <FontAwesomeIcon className="icon" icon={faFire} />
        <FontAwesomeIcon className="icon" icon={faTrashCan} />
        <FontAwesomeIcon className="icon" icon={faPen} />
        
    </li>
}