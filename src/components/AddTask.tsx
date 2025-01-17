import "../css/AddTask.css";
import "../css/Global.css/";

export function AddTask(){

    return <section id="addTask-wrapper">
        <input type="text" name="addTask" placeholder="What needs to be done?"/>
        <button type="button">Add</button>
    </section>
}