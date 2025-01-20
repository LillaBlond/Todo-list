import "../css/Global.css";
import "../css/TaskItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPen, faFire, faFloppyDisk, faXmark} from "@fortawesome/free-solid-svg-icons"
import { ChangeEvent, useState } from "react";

interface ITaskItemProps{
    id: number;
    content: string;
    removeItem: (id: number) => void;
}


export function TaskItem({id, content, removeItem}: ITaskItemProps){
    const [isDone, setIsDone] = useState<boolean>(false);
    const [isActive, setIsActive] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState(content);
    const [tempValue, setTempValue] = useState("");

    function changeProgressStatus(){
        isDone ? setIsDone(false) : setIsDone(true);
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

    return <li key={id} className={"taskItem" + " " +(isDone ? "done" : "")}>
        {!isDone && <FontAwesomeIcon className="icon" icon={faFire} />}
        <input type="checkbox" name="checkbox" onClick={changeProgressStatus} disabled={isActive ? true : false}/>
        <input type="text" className={(isDone ? "done" : "")} value={inputValue} onChange={handleChange} disabled={isActive ? false : true}/>
        {!isDone && <FontAwesomeIcon className="icon" icon={isActive ? faFloppyDisk: faPen} onClick={ () => changeActiveStatus()}/>}
        <FontAwesomeIcon className="icon" icon={isActive ? faXmark: faTrashCan} onClick={() => { !isActive ? removeItem(id) : cancelChange()} } />
    </li>
}