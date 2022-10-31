import { memo } from "react";
import { ActiveTasksType, Task } from "../../types/types";
import TaskListItem from "../TaskListItem/TaskListItem";
import './TasksList.scss'

type TasksListProps = {
    classNames?: string[];
    list: Task[];
    filterBy?: ActiveTasksType;
    updateTaskList: (tasks: Task[]) => void;
}


function TasksList({ list, classNames = [], filterBy = ActiveTasksType.ALL, updateTaskList }: TasksListProps) {

    function updateTaskState(task: Task, active: boolean) {
        const new_tasks = list.map((item, indx) => {
            if (Object.is(item, task)) item.complete = active
            return item;
        })
        updateTaskList(new_tasks);
    }

    return (
        <ul className={["listbox", ...classNames].join(' ')}>
            {list.filter((item) => {
                if (filterBy === ActiveTasksType.ALL) return item
                else if (filterBy === ActiveTasksType.ACTIVE) return item.complete === false
                else return item.complete === true
            }).map((item, index) => {
                return (

                    <TaskListItem
                        checked={item.complete}
                        id={index}
                        task={item}
                        onChange={updateTaskState}
                        key={index}
                    />

                )
            })}
        </ul>
    );
}

export default memo(TasksList);