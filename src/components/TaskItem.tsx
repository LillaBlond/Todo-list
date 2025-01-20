import "../css/Global.css";
import "../css/TaskItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPen, faFire, faFloppyDisk, faXmark} from "@fortawesome/free-solid-svg-icons"
import { ChangeEvent, useState } from "react";

interface ITaskItemProps{
    id: number;
    content: string;
    status: boolean;
    removeItem: (id: number) => void;
    updateTask: (id: number, value: string, status: boolean) => void;
}


export function TaskItem({id, content, status, removeItem, updateTask}: ITaskItemProps){
    const [isDone, setIsDone] = useState<boolean>(status);
    const [isActive, setIsActive] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState(content);
    const [tempValue, setTempValue] = useState("");

    function setProgressStatus(){
        const tempStatus = isDone ? false : true;
        setIsDone(tempStatus)
        console.log(tempStatus);
        updateTask(id, inputValue, tempStatus);
    }

    function changeActiveStatus(){
        isActive ? setIsActive(false) : setIsActive(true);  
        setTempValue(inputValue);
    }

    function handleChange(e: ChangeEvent<HTMLInputElement>){
        setInputValue(e.target.value);
    }

    function cancelChange(){
        setInputValue(tempValue);
        changeActiveStatus();
    }

    function saveChange(){
        updateTask(id, inputValue, isDone);
        changeActiveStatus();
    }

    return <li key={id} className={"taskItem" + " " +(isDone ? "done" : "")}>
        {!isDone && <FontAwesomeIcon className="icon" icon={faFire} />}
        <input type="checkbox" name="checkbox" onClick={setProgressStatus} disabled={isActive ? true : false} checked={isDone ? true : false}/>
        <input type="text" className={(isDone ? "done" : "")} value={inputValue} onChange={handleChange} disabled={isActive ? false : true}/>
        {!isDone && <FontAwesomeIcon className="icon" icon={isActive ? faFloppyDisk: faPen} onClick={ () => isActive ? saveChange() : changeActiveStatus()}/>}
        <FontAwesomeIcon className="icon" icon={isActive ? faXmark: faTrashCan} onClick={() => { !isActive ? removeItem(id) : cancelChange()} } />
    </li>
}