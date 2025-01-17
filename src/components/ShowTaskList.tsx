import "../css/Global.css";
import "../css/ShowTaskList.css";

interface IShowTaskListProps{
    list: string[];
}

export function ShowTaskList({list}: IShowTaskListProps){

    function showTaskItems(list: string[]){
        const listOfTasks = list.map((task) => {
            console.log(task);
            return <li>{task}</li>
        })
    return listOfTasks;
}

    return <section id="task-list">
        <ul>
            {showTaskItems(list)}
        </ul>
    </section>
}