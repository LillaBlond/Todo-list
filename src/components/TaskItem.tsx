import "../css/Global.css";
import "../css/TaskItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPen, faFire, faFloppyDisk, faXmark} from "@fortawesome/free-solid-svg-icons"
import { ChangeEvent, useState } from "react";

interface ITaskItemProps{
    id: number;
    content: string;
    status: boolean;
    isPriority: boolean;
    removeTask: (id: number) => void;
    updateTask: (id: number, value: string, status: boolean, isPriority: boolean) => void;
    updatePriority: (id: number) => void;
}

export function TaskItem({id, content, status, isPriority, removeTask, updateTask, updatePriority}: ITaskItemProps){
    const [isDone, setIsDone] = useState<boolean>(status);
    const [isActive, setIsActive] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState(content);
    const [tempValue, setTempValue] = useState("");
    const [isMaxLength, setIsMaxLength] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);
    const [showError, setShowError] = useState(false);

    function setProgressStatus(){
        const tempStatus = isDone ? false : true;
        setIsDone(tempStatus)
        updateTask(id, inputValue, tempStatus, false);
    }

    function changeActiveStatus(){
        isActive ? setIsActive(false) : setIsActive(true);  
        setTempValue(inputValue);
    }

    function handleChange(e: ChangeEvent<HTMLInputElement>){
        if(e.target.value.length === e.target.maxLength){
            setIsMaxLength(true);
        } else if(e.target.value.length === 0){
            setIsEmpty(true);
            setInputValue(e.target.value);
        } else {
            setShowError(false);
            setIsMaxLength(false);  
            setIsEmpty(false);
            setInputValue(e.target.value);
        }
    }

    function cancelChange(){
        setInputValue(tempValue);
        setIsMaxLength(false);
        setIsEmpty(false);
        setShowError(false);
        changeActiveStatus();
    }
    
    function saveChange(){
        if(!isEmpty){
            updateTask(id, inputValue, isDone, isPriority);
            changeActiveStatus();
            setIsMaxLength(false);
            setShowError(false);
        } else {
            setShowError(true);
        }
    }

    return <li key={id} className={"taskItem" +(isDone ? " done" : "") + (isPriority ? " priority": "")}>
        {!isDone && !isActive && <FontAwesomeIcon className={"icon" + (isPriority ? " priority" : "")} icon={faFire} onClick={() => updatePriority(id)}/>}
        {!isActive && <input type="checkbox" name="checkbox" onClick={setProgressStatus} disabled={isActive ? true : false} defaultChecked={isDone ? true : false}/>}
        {isMaxLength && <p className={"task-item-error" + (isPriority ? " priority" : "")}>Max 60 characters</p>}
        {showError && <p className={"task-item-error" + (isPriority ? " priority" : "")}>A task can not be empty. Just remove it instead.</p>}
        <input type="text" className={(isDone ? "done" : "") + (isActive ? " active" : "") +(isPriority ? " priority" : "")} value={inputValue} onChange={handleChange} disabled={isActive ? false : true} maxLength={60}/>
        {!isDone && <FontAwesomeIcon className={"icon" +(isPriority ? " priority" : "")} icon={(isActive ? faFloppyDisk: faPen) } onClick={ () => isActive ? saveChange() : changeActiveStatus()}/>}
        <FontAwesomeIcon className={"icon" +(isPriority ? " priority" : "")} icon={isActive ? faXmark: faTrashCan} onClick={() => { !isActive ? removeTask(id) : cancelChange()} } />
    </li>
}