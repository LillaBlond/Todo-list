import "../css/Global.css";
import "../css/TaskItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPen, faFire} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";

interface ITaskItemProps{
    id: number;
    content: string;
    removeItem: (id: number) => void;
}


export function TaskItem({id, content, removeItem}: ITaskItemProps){
    const [isDone, setIsDone] = useState<boolean>(false);

    function changeStatus(){
        isDone ? setIsDone(false) : setIsDone(true);
    }

    return <li key={id} className={"taskItem" + " " +(isDone ? "done" : "")}>
        <input type="checkbox" name="checkbox" onClick={changeStatus}/>
        <input type="text" className={(isDone ? "done" : "")} value={content} disabled/>
        <FontAwesomeIcon className="icon" icon={faFire} />
        <FontAwesomeIcon className="icon" icon={faTrashCan} onClick={() => removeItem(id)} />
        <FontAwesomeIcon className="icon" icon={faPen} />
    </li>
}