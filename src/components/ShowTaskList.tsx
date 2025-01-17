import "../css/Global.css";
import "../css/ShowTaskList.css";


interface IShowTaskListProps{
    taskList: string[];
}


export function ShowTaskList({taskList}: IShowTaskListProps){

    function showTaskItems(){
        const listOfTasks = taskList.map((task: string) => {
            return <li>{task}</li>
        });

        return listOfTasks;
    }

    return <section id="task-list">
        <ul>
            {showTaskItems()}
        </ul>
    </section>
}