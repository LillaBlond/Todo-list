import { ChangeEvent, FormEvent, useState } from "react";
import "../css/AddTask.css";
import "../css/Global.css";

interface IAddTaskProps{
    addTask: (task: string) => void;
}

export function AddTask(props: IAddTaskProps){
    const [inputValue, setInputValue] = useState("")
    const [isMaxLength, setIsMaxLength] = useState(false);

    function handleChange(e: ChangeEvent<HTMLInputElement>){
        if(e.target.value.length === e.target.maxLength){
            setIsMaxLength(true);
        } else {
            setIsMaxLength(false);  
            setInputValue(e.target.value);
        }
    }


    function handleSubmit(e: FormEvent){
        e.preventDefault();
        props.addTask(inputValue);
        setInputValue("");
    }

    return <form id="addTask-wrapper">
        <input type="text" name="addTask" onChange={handleChange} value={inputValue} placeholder="What needs to be done?" maxLength={60}/>
        <button type="submit" onClick={handleSubmit}>Add</button>
        {isMaxLength && <p id="error-message">A task can max be 60 characters. <br />Try breaking your task down into smaller tasks</p>}
    </form>
}