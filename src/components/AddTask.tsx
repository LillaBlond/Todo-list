import { ChangeEvent, useState } from "react";
import "../css/AddTask.css";
import "../css/Global.css";

interface IAddTaskProps{
    addTask: (task: string) => void;
}

export function AddTask(props: IAddTaskProps){
    const [inputValue, setInputValue] = useState("")

    function handleChange(e: ChangeEvent<HTMLInputElement>){
            setInputValue(e.target.value);
    }

    function clearInputValue(){
        setInputValue("");
    }

    return <section id="addTask-wrapper">
        <input type="text" name="addTask" onChange={handleChange} value={inputValue} placeholder="What needs to be done?"/>
        <button type="button" onClick={()=>{props.addTask(inputValue); clearInputValue()}}>Add</button>
    </section>
}